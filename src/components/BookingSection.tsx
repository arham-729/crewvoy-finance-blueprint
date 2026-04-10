import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Globe } from "lucide-react";

const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"];

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BookingSection = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  // Adjust so Monday=0
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

  return (
    <section id="booking" className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center mb-12">
          Book a Consultation
        </h2>

        <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-5">
            {/* Left Panel */}
            <div className="md:col-span-2 hero-gradient p-8 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-800 text-hero-foreground mb-2">
                Crew<span className="text-gradient">Voy</span>
              </h3>
              <p className="text-hero-foreground/70 text-sm mb-6">Free Consultation Call</p>

              <div className="flex items-center gap-2 text-hero-foreground/60 text-sm mb-3">
                <Clock size={16} />
                <span>30 minutes</span>
              </div>
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
                    <button className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                      Confirm Booking
                    </button>
                  )}
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
