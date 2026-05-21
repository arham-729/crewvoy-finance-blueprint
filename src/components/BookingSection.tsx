import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronLeft, ChevronRight, Clock, Globe, Calendar, ArrowLeft, CheckCircle2, Zap, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM",
];

const getDaysInMonth  = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay();
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayNames   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const adminEmails = "Hamzaareeb048@gmail.com, arhamharoonansari70@gmail.com";

const perks = [
  { icon: Clock,      label: "30-minute session", sub: "Free, no commitment" },
  { icon: Zap,        label: "Same-week deployment", sub: "We move fast" },
  { icon: Shield,     label: "You own everything", sub: "All systems in your accounts" },
];

const BookingSection = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear,  setCurrentYear]  = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep]                 = useState<"calendar" | "details">("calendar");
  const [fullName,    setFullName]      = useState("");
  const [email,       setEmail]         = useState("");
  const [phone,       setPhone]         = useState("");
  const [agreeComms,  setAgreeComms]    = useState(false);
  const [isSending,   setIsSending]     = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay    = (() => { const fd = getFirstDayOfMonth(currentYear, currentMonth); return fd === 0 ? 6 : fd - 1; })();

  const prevMonth = () => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); } else setCurrentMonth(m => m - 1); setSelectedDate(null); setSelectedTime(null); };
  const nextMonth = () => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); } else setCurrentMonth(m => m + 1); setSelectedDate(null); setSelectedTime(null); };
  const isDatePast = (day: number) => { const d = new Date(currentYear, currentMonth, day); const t = new Date(); t.setHours(0,0,0,0); return d < t; };
  const isWeekend  = (day: number) => { const d = new Date(currentYear, currentMonth, day).getDay(); return d === 0 || d === 6; };

  const formatDateTime = () => {
    if (!selectedDate || !selectedTime) return "";
    const dateObj = new Date(currentYear, currentMonth, selectedDate);
    const [time, period] = selectedTime.split(" ");
    const [h, m] = time.split(":").map(Number);
    let eH = h, eM = m + 30, eP = period;
    if (eM >= 60) { eM -= 60; eH++; }
    if (eH === 12 && period === "AM") eP = "PM";
    if (eH > 12)  { eH -= 12; eP = period === "AM" ? "PM" : "AM"; }
    return `${selectedTime} – ${String(eH).padStart(2,"0")}:${String(eM).padStart(2,"0")} ${eP} · ${dayNames[dateObj.getDay()]}, ${monthNames[dateObj.getMonth()].slice(0,3)} ${selectedDate}`;
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) { toast({ title: "Select a date and time" }); setStep("calendar"); return; }
    if (!fullName.trim() || !email.trim() || !phone.trim()) { toast({ title: "Missing details", description: "Please fill all fields." }); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { toast({ title: "Invalid email" }); return; }
    if (!agreeComms) { toast({ title: "Consent required" }); return; }
    const svcId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const tplId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!svcId || !tplId || !pubKey) { toast({ title: "Email not configured" }); return; }
    const payload = { full_name: fullName.trim(), user_email: email.trim(), phone: phone.trim(), booking_date: `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`, booking_time: selectedTime, booking_date_time: formatDateTime(), time_zone: "Asia/Karachi (GMT+5)", consent: "Yes", reply_to: email.trim() };
    setIsSending(true);
    try {
      await Promise.all([
        emailjs.send(svcId, tplId, { ...payload, to_email: adminEmails }, pubKey),
        emailjs.send(svcId, tplId, { ...payload, to_email: email.trim() }, pubKey),
      ]);
      toast({ title: "Booking confirmed!", description: "Check your inbox for the confirmation." });
      setStep("calendar"); setSelectedDate(null); setSelectedTime(null);
      setFullName(""); setEmail(""); setPhone(""); setAgreeComms(false);
    } catch {
      toast({ title: "Email failed", description: "Could not send. Please try again." });
    } finally { setIsSending(false); }
  };

  return (
    <section id="booking" className="section-white section-padding">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Book a call</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0D1117] leading-[1.1]">
            Let's architect<br />
            <span className="italic font-light text-[#6B7280]">your edge.</span>
          </h2>
        </div>

        {/* Card */}
        <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: "1px solid #E8EAF0" }}>
          <div className="grid md:grid-cols-5">

            {/* ── Left panel — dark ── */}
            <div className="md:col-span-2 relative flex flex-col p-6 md:p-9" style={{ background: "#0D1117" }}>

              {step === "details" && (
                <button
                  onClick={() => setStep("calendar")}
                  className="absolute top-7 left-7 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                >
                  <ArrowLeft size={15} />
                </button>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <p className="font-heading text-xl font-bold text-white mb-1">
                    crewvoy
                  </p>
                  <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Free Strategy Call</p>
                </div>

                {/* Perks */}
                <div className="space-y-5 mb-8 flex-1">
                  {perks.map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(252,148,175,0.15)" }}>
                        <Icon size={15} style={{ color: "#FC94AF" }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{label}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected slot pill */}
                <AnimatePresence>
                  {selectedDate && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="rounded-xl p-4 mb-6"
                      style={{ background: "rgba(252,148,175,0.12)", border: "1px solid rgba(252,148,175,0.3)" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={13} style={{ color: "#FC94AF" }} />
                        <span className="text-xs font-semibold" style={{ color: "#FC94AF" }}>Your slot</span>
                      </div>
                      <p className="text-sm font-medium text-white leading-snug">{formatDateTime()}</p>
                      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Asia/Karachi (GMT+5)</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
                  30 minutes to map your workflows, identify automation surface area, and show you exactly what we'd ship.
                </p>
              </div>
            </div>

            {/* ── Right panel — white ── */}
            <div className="md:col-span-3 bg-white p-8 md:p-10">
              <AnimatePresence mode="wait">
                {step === "calendar" ? (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h4 className="font-heading text-lg font-bold text-[#0D1117] mb-6">Select a date</h4>

                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-5">
                      <button onClick={prevMonth} className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9AA0B4] hover:text-[#D4007A] hover:bg-[#FDF0F8] transition-all">
                        <ChevronLeft size={17} />
                      </button>
                      <span className="font-bold text-sm text-[#0D1117]">{monthNames[currentMonth]} {currentYear}</span>
                      <button onClick={nextMonth} className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9AA0B4] hover:text-[#D4007A] hover:bg-[#FDF0F8] transition-all">
                        <ChevronRight size={17} />
                      </button>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-2">
                      {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
                        <div key={d} className="text-center text-xs font-semibold text-[#B0B8CC] py-1">{d}</div>
                      ))}
                    </div>

                    {/* Day grid */}
                    <div className="grid grid-cols-7 gap-1 mb-7">
                      {Array.from({ length: startDay }).map((_,i) => <div key={`e-${i}`} />)}
                      {Array.from({ length: daysInMonth }).map((_,i) => {
                        const day = i + 1;
                        const disabled = isDatePast(day) || isWeekend(day);
                        const selected = selectedDate === day;
                        const today_d = new Date().getDate() === day &&
                          new Date().getMonth() === currentMonth &&
                          new Date().getFullYear() === currentYear;
                        return (
                          <button
                            key={day}
                            disabled={disabled}
                            onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                            className={`relative h-9 w-full rounded-lg text-sm font-semibold transition-all duration-150 ${
                              selected
                                ? "bg-[#D4007A] text-white shadow-md shadow-pink-200"
                                : disabled
                                ? "text-[#D0D5E0] cursor-not-allowed"
                                : "text-[#374151] hover:bg-[#FDF0F8] hover:text-[#D4007A]"
                            }`}
                          >
                            {day}
                            {today_d && !selected && (
                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4007A]" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time slots */}
                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div className="h-px flex-1 bg-[#E8EAF0]" />
                            <p className="text-xs font-semibold text-[#9AA0B4] px-2">
                              {monthNames[currentMonth].slice(0,3)} {selectedDate} — pick a time
                            </p>
                            <div className="h-px flex-1 bg-[#E8EAF0]" />
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition-all duration-150 ${
                                  selectedTime === time
                                    ? "bg-[#D4007A] text-white border-[#D4007A] shadow-md shadow-pink-200"
                                    : "bg-white border-[#E8EAF0] text-[#374151] hover:border-[#D4007A]/40 hover:bg-[#FDF0F8] hover:text-[#D4007A]"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>

                          <AnimatePresence>
                            {selectedTime && (
                              <motion.button
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setStep("details")}
                                className="w-full mt-5 btn-coral justify-center text-base py-4 rounded-xl"
                              >
                                Continue <ChevronRight size={16} />
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-7">
                      <CheckCircle2 size={20} className="text-[#D4007A]" />
                      <div>
                        <p className="text-xs text-[#9AA0B4] font-medium">Slot confirmed</p>
                        <p className="text-sm font-bold text-[#0D1117]">{formatDateTime()}</p>
                      </div>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-[#0D1117] mb-6">Your details</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="fullName" className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Jane Smith"
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          className="rounded-xl border-[#E8EAF0] focus:border-[#D4007A] focus:ring-[#D4007A]/20 h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="rounded-xl border-[#E8EAF0] focus:border-[#D4007A] focus:ring-[#D4007A]/20 h-11"
                        />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="phone" className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          className="rounded-xl border-[#E8EAF0] focus:border-[#D4007A] focus:ring-[#D4007A]/20 h-11"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer mt-5 p-4 rounded-xl bg-[#F2F4F9] border border-[#E8EAF0]">
                      <Checkbox
                        checked={agreeComms}
                        onCheckedChange={c => setAgreeComms(c === true)}
                        className="mt-0.5"
                      />
                      <span className="text-sm text-[#6B7280] leading-relaxed">
                        I agree to receive emails and messages about my booking. No spam, ever.
                      </span>
                    </label>

                    <button
                      onClick={handleSubmit}
                      disabled={isSending}
                      className="w-full mt-6 btn-coral justify-center text-base py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            <Zap size={15} />
                          </motion.div>
                          Confirming…
                        </span>
                      ) : (
                        <>Book Your Free Discovery Call <CheckCircle2 size={16} /></>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
