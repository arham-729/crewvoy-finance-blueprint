import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronLeft, ChevronRight, Clock, Globe, Calendar, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"];

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const adminEmails = "Hamzaareeb048@gmail.com, arhamharoonansari70@gmail.com";

const BookingSection = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "details">("calendar");

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeComms, setAgreeComms] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isDatePast = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const isWeekend = (day: number) => {
    const d = new Date(currentYear, currentMonth, day).getDay();
    return d === 0 || d === 6;
  };

  const getSelectedDateObj = () => {
    if (!selectedDate) return null;
    return new Date(currentYear, currentMonth, selectedDate);
  };

  const formatSelectedDateTime = () => {
    const dateObj = getSelectedDateObj();
    if (!dateObj || !selectedTime) return "";
    const dayName = dayNames[dateObj.getDay()];
    const monthName = monthNames[dateObj.getMonth()].slice(0, 3);
    // Parse time to calculate end time
    const [time, period] = selectedTime.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let endHours = hours;
    let endMinutes = minutes + 30;
    let endPeriod = period;
    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }
    if (endHours === 12 && period === "AM") endPeriod = "PM";
    if (endHours > 12) { endHours -= 12; endPeriod = period === "AM" ? "PM" : "AM"; }
    const endTime = `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")} ${endPeriod}`;
    return `${selectedTime} - ${endTime}, ${dayName}, ${monthName} ${selectedDate}, ${currentYear}`;
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      toast({ title: "Select a date and time", description: "Pick a date and time slot to continue." });
      return;
    }
    setStep("details");
  };

  const handleBack = () => {
    setStep("calendar");
  };

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      toast({ title: "Select a date and time", description: "Pick a date and time slot to continue." });
      setStep("calendar");
      return;
    }
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast({ title: "Missing details", description: "Please add your name, email, and phone." });
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "Invalid email", description: "Enter a valid email address to receive confirmation." });
      return;
    }
    if (!agreeComms) {
      toast({ title: "Consent required", description: "Please agree to receive messages to confirm." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email not configured",
        description: "Add EmailJS keys to .env.local before confirming bookings.",
      });
      return;
    }

    const bookingDate = `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`;
    const payload = {
      full_name: fullName.trim(),
      user_email: email.trim(),
      phone: phone.trim(),
      booking_date: bookingDate,
      booking_time: selectedTime,
      booking_date_time: formatSelectedDateTime(),
      time_zone: "Asia/Karachi (GMT+5)",
      consent: agreeComms ? "Yes" : "No",
      reply_to: email.trim(),
    };

    setIsSending(true);
    try {
      await Promise.all([
        emailjs.send(
          serviceId,
          templateId,
          { ...payload, to_email: adminEmails },
          publicKey,
        ),
        emailjs.send(
          serviceId,
          templateId,
          { ...payload, to_email: email.trim() },
          publicKey,
        ),
      ]);

      toast({
        title: "Booking confirmed",
        description: "We sent a confirmation email. Talk soon!",
      });

      setStep("calendar");
      setSelectedDate(null);
      setSelectedTime(null);
      setFullName("");
      setEmail("");
      setPhone("");
      setAgreeComms(false);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Email failed",
        description: "We could not send your booking email. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="booking" className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center mb-12">
          Book a Consultation
        </h2>

        <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-5">
            {/* Left Panel */}
            <div className="md:col-span-2 hero-gradient p-8 flex flex-col justify-center relative">
              {step === "details" && (
                <button
                  onClick={handleBack}
                  className="absolute top-6 left-6 w-10 h-10 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-foreground/60 hover:text-hero-foreground hover:border-hero-foreground/40 transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
              )}

              <h3 className="font-heading text-2xl font-800 text-hero-foreground mb-2">
                Crew<span className="text-gradient">Voy</span>
              </h3>
              <p className="text-hero-foreground/70 text-sm mb-6">Free Consultation Call</p>

              <div className="flex items-center gap-2 text-hero-foreground/60 text-sm mb-3">
                <Clock size={16} />
                <span>30 minutes</span>
              </div>

              {step === "details" && selectedDate && selectedTime && (
                <div className="flex items-center gap-2 text-hero-foreground/60 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{formatSelectedDateTime()}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-hero-foreground/60 text-sm mb-6">
                <Globe size={16} />
                <span>Asia/Karachi (GMT+5)</span>
              </div>

              <p className="text-hero-foreground/50 text-xs leading-relaxed">
                You're a few steps away from finding the ideal financial professional for your business. 
                Book a call and let us understand your needs.
              </p>
            </div>

            {/* Right Panel */}
            <div className="md:col-span-3 p-6 md:p-8">
              {step === "calendar" ? (
                <>
                  <h4 className="font-heading font-700 text-foreground mb-4">Select Date & Time</h4>

                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-1 hover:bg-muted rounded-lg transition-colors text-foreground">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-heading font-600 text-foreground">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <button onClick={nextMonth} className="p-1 hover:bg-muted rounded-lg transition-colors text-foreground">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>

                  {/* Days */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {Array.from({ length: startDay }).map((_, i) => (
                      <div key={`e-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const past = isDatePast(day);
                      const weekend = isWeekend(day);
                      const disabled = past || weekend;
                      const selected = selectedDate === day;

                      return (
                        <button
                          key={day}
                          disabled={disabled}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                          className={`h-9 rounded-lg text-sm font-medium transition-all ${
                            selected
                              ? "bg-secondary text-secondary-foreground"
                              : disabled
                              ? "text-muted-foreground/40 cursor-not-allowed"
                              : "text-foreground hover:bg-secondary/10"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">
                        Available times for {monthNames[currentMonth]} {selectedDate}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                              selectedTime === time
                                ? "bg-secondary text-secondary-foreground border-secondary"
                                : "border-border text-foreground hover:border-secondary/50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      {selectedTime && (
                        <button
                          onClick={handleConfirm}
                          className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                /* Details Form */
                <div>
                  <h4 className="font-heading text-xl font-700 text-foreground mb-6">Enter Details</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
                      <Input
                        id="fullName"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="mt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox
                        checked={agreeComms}
                        onCheckedChange={(checked) => setAgreeComms(checked === true)}
                        className="mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground">
                        I agree to receive text messages and emails. Don't worry, we won't spam you.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSending}
                    className="w-full mt-8 bg-secondary text-secondary-foreground py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-base"
                  >
                    {isSending ? "Sending..." : "Book Your Free Discovery Call"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
