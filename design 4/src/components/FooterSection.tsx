import { motion } from 'motion/react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white py-32 md:py-48 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-16">
          
          {/* Brand */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link to="/" className="mb-12">
              <img 
                src="/cropped-Nabatian_Logo.png" 
                alt="Nabatian" 
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-serif text-xl font-light text-white/60 leading-relaxed max-w-xs">
              Authentisches persisches Restaurant in Heilbronn. Erleben Sie die Vielfalt der persischen Küche in einem eleganten Ambiente.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-12">Kontakt</h4>
            <div className="space-y-8 font-serif text-lg font-light text-white/60">
              <div className="flex items-start gap-6 group">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" strokeWidth={1} />
                <p className="leading-relaxed">
                  Im Haselter 9/1<br />
                  74080 Heilbronn<br />
                  <span className="italic text-white/40 text-base">Am Sonnenbrunnen in Böckingen</span>
                </p>
              </div>
              <div className="flex items-center gap-6 group">
                <Phone className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
                <a href="tel:+49123456789" className="hover:text-white transition-colors duration-300">
                  +49 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-6 group">
                <Mail className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
                <a href="mailto:nasrin.nabatian@gmail.com" className="hover:text-white transition-colors duration-300">
                  nasrin.nabatian@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-start">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-12">Öffnungszeiten</h4>
            <ul className="space-y-6 font-serif text-lg font-light text-white/60 w-full">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Mi & Do</span>
                <span className="text-[#D4AF37]">17:00 – 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Fr & Sa</span>
                <span className="text-[#D4AF37]">17:00 – 23:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>So (Frühstück)</span>
                <span className="text-[#D4AF37]">09:00 – 12:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>So (Mittag)</span>
                <span className="text-[#D4AF37]">12:00 – 14:00</span>
              </li>
              <li className="flex justify-between text-white/40 pt-2">
                <span>Mo & Di</span>
                <span>Ruhetag</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-12">Folgen Sie uns</h4>
            <div className="flex gap-8 mb-16">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram className="w-6 h-6" strokeWidth={1} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook className="w-6 h-6" strokeWidth={1} />
              </a>
            </div>
            <div className="flex flex-col items-start lg:items-end space-y-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
              <a href="#" className="hover:text-white transition-colors duration-300">Impressum</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Datenschutz</a>
            </div>
          </div>

        </div>

        <div className="mt-32 pt-12 border-t border-white/5 text-center font-sans text-[9px] uppercase tracking-[0.3em] text-white/20">
          <p>&copy; {new Date().getFullYear()} Restaurant Nabatian. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
