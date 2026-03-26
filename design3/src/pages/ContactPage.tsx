import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-6"
          >
            Kontakt & Reservierung
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-light tracking-[-0.02em]"
          >
            Wir freuen uns auf Sie
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-16"
          >
            <div className="space-y-8 font-serif text-xl font-light text-white/60">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" strokeWidth={1} />
                <p className="leading-relaxed">
                  <strong className="text-white font-normal">Restaurant Nabatian</strong><br />
                  Im Haselter 9/1<br />
                  74080 Heilbronn<br />
                  <span className="italic text-white/40 text-base">Am Sonnenbrunnen in Böckingen</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />
                <a href="tel:+49123456789" className="hover:text-white transition-colors duration-300">
                  +49 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />
                <a href="mailto:nasrin.nabatian@gmail.com" className="hover:text-white transition-colors duration-300">
                  nasrin.nabatian@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="font-serif text-3xl text-white mb-8 flex items-center gap-4">
                <Clock className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />
                Öffnungszeiten
              </h3>
              <ul className="space-y-4 font-serif text-lg font-light text-white/60">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mittwoch & Donnerstag</span>
                  <span className="text-[#D4AF37]">17:00 – 22:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Freitag & Samstag</span>
                  <span className="text-[#D4AF37]">17:00 – 23:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sonntag (Frühstück)</span>
                  <span className="text-[#D4AF37]">09:00 – 12:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sonntag (Mittag)</span>
                  <span className="text-[#D4AF37]">12:00 – 14:00</span>
                </li>
                <li className="flex justify-between text-white/40 pt-2">
                  <span>Montag & Dienstag</span>
                  <span>Ruhetag</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white/5 p-8 md:p-12 border border-white/10"
          >
            <h3 className="font-serif text-3xl text-white mb-2">Tisch reservieren</h3>
            <p className="font-serif text-white/40 mb-10">Sichern Sie sich Ihren Platz für einen unvergesslichen Abend.</p>
            
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Reservierungsanfrage gesendet!'); }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">Datum</label>
                  <div className="relative">
                    <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
                    <input type="date" className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">Uhrzeit</label>
                  <div className="relative">
                    <Clock className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
                    <select className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer" required>
                      <option className="bg-[#050505]">17:00</option>
                      <option className="bg-[#050505]">17:30</option>
                      <option className="bg-[#050505]">18:00</option>
                      <option className="bg-[#050505]">18:30</option>
                      <option className="bg-[#050505]">19:00</option>
                      <option className="bg-[#050505]">19:30</option>
                      <option className="bg-[#050505]">20:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">Personen</label>
                <div className="relative">
                  <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
                  <select className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer" required>
                    <option className="bg-[#050505]">1 Person</option>
                    <option className="bg-[#050505]" selected>2 Personen</option>
                    <option className="bg-[#050505]">3 Personen</option>
                    <option className="bg-[#050505]">4 Personen</option>
                    <option className="bg-[#050505]">5 Personen</option>
                    <option className="bg-[#050505]">6+ Personen</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <input type="text" placeholder="Vorname" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
                <input type="text" placeholder="Nachname" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="email" placeholder="E-Mail Adresse" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
                <input type="tel" placeholder="Telefonnummer" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
              </div>

              <textarea placeholder="Besondere Wünsche (Allergien, Anlass...)" rows={3} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"></textarea>

              <button type="submit" className="w-full bg-[#D4AF37] text-[#050505] px-10 py-5 font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-500 mt-8">
                Reservierung anfragen
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
