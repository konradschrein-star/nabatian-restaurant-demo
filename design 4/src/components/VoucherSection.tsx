import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function VoucherSection() {
  return (
    <section id="vouchers" className="py-32 md:py-48 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-8"
            >
              Verschenken Sie Genuss
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-[-0.02em] mb-12"
            >
              Gutscheine für <br />
              <span className="italic text-white/40">jeden</span> Anlass
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 font-serif text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-xl"
            >
              <p>
                Mit unserem NABATIAN Gutschein verschenken Sie Genuss und persisches Esserlebnis zugleich. Ob Weihnachten, Geburtstag, Ostern, Muttertag oder nur so, um eine Freude zu bereiten. Gelegenheiten für einen Gutschein gibt es viele.
              </p>
              <p>
                Sie sind noch auf der Suche nach der passenden Aufmerksamkeit für Ihre Mitarbeiter? Belohnen Sie Ihre Mitarbeiter mit ein wenig Urlaubsflair und einem persischen Esserlebnis.
              </p>
              <p className="italic text-[#D4AF37] pt-8">
                Gerne verschicken wir den Gutschein direkt an Ihren Lieblingsmensch. Ein Anruf genügt.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16"
            >
              <Link
                to="/gutscheine"
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-12 py-5 font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37] hover:text-[#050505] transition-colors duration-500"
              >
                Gutschein bestellen
              </Link>
            </motion.div>
          </div>

          {/* Right: Overlapping Images */}
          <div className="relative order-1 lg:order-2 h-[500px] md:h-[700px] flex justify-center items-center">
            <div className="relative w-full max-w-lg h-full">
              <motion.img
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                src="/Gutschein-RS-1-768x1024.jpg"
                alt="Gutschein Rückseite"
                className="absolute top-[10%] right-0 w-[70%] rounded-sm shadow-2xl border border-white/5"
              />
              <motion.img
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                src="/Gutschein-VS-1-768x1024.jpg"
                alt="Gutschein Vorderseite"
                className="absolute top-[20%] left-0 w-[70%] rounded-sm shadow-2xl border border-white/5 z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
