import { motion } from 'motion/react';
import { Calendar, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: 'easeOut' }}
          src={`${import.meta.env.BASE_URL}Authentisch_persisch_Fest.jpg`}
          alt="Persian Cuisine"
          className="w-full h-full object-cover object-center opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-8 block">
            Authentisch Persisch
          </span>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[11rem] font-light text-white leading-[0.85] tracking-[-0.02em] mb-12">
            Nabatian
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto italic leading-relaxed">
            Eine Reise durch die Aromen des Orients. <br className="hidden md:block" />
            Erleben Sie persische Gastfreundschaft in Heilbronn.
          </p>
        </motion.div>
      </div>

      {/* Integrated Reservation Bar */}
      <motion.div 
        id="reservation"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12 md:pb-16"
      >
        <div className="max-w-[1000px] mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0 px-4">
            {/* Date */}
            <div className="flex items-center gap-4 w-full md:w-1/3 md:border-r border-white/10 md:pr-8 py-3 md:py-0">
              <Calendar className="w-5 h-5 text-[#D4AF37] font-light" strokeWidth={1} />
              <div className="flex flex-col items-start w-full">
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Datum</span>
                <input 
                  type="date" 
                  className="bg-transparent text-white font-sans text-sm w-full focus:outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4 w-full md:w-1/3 md:border-r border-white/10 md:px-8 py-3 md:py-0">
              <Clock className="w-5 h-5 text-[#D4AF37] font-light" strokeWidth={1} />
              <div className="flex flex-col items-start w-full">
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Uhrzeit</span>
                <select className="bg-transparent text-white font-sans text-sm w-full focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-[#050505]">17:00</option>
                  <option className="bg-[#050505]">17:30</option>
                  <option className="bg-[#050505]">18:00</option>
                  <option className="bg-[#050505]">18:30</option>
                  <option className="bg-[#050505]" selected>19:00</option>
                  <option className="bg-[#050505]">19:30</option>
                  <option className="bg-[#050505]">20:00</option>
                </select>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-4 w-full md:w-1/3 md:pl-8 py-3 md:py-0">
              <Users className="w-5 h-5 text-[#D4AF37] font-light" strokeWidth={1} />
              <div className="flex flex-col items-start w-full">
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Personen</span>
                <select className="bg-transparent text-white font-sans text-sm w-full focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-[#050505]">1 Person</option>
                  <option className="bg-[#050505]" selected>2 Personen</option>
                  <option className="bg-[#050505]">3 Personen</option>
                  <option className="bg-[#050505]">4 Personen</option>
                  <option className="bg-[#050505]">5 Personen</option>
                  <option className="bg-[#050505]">6+ Personen</option>
                </select>
              </div>
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={() => navigate('/kontakt')}
            className="w-full md:w-auto bg-[#D4AF37] text-[#050505] px-10 py-5 font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-500 whitespace-nowrap"
          >
            Tisch reservieren
          </button>
        </div>
      </motion.div>
    </section>
  );
}
