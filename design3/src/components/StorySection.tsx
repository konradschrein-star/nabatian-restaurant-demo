import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <section id="story" className="py-32 md:py-48 bg-[#050505] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          
          {/* Left: Massive Typography */}
          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-8"
            >
              Unsere Philosophie
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-[-0.02em] mb-12"
            >
              Die Kunst der <br />
              <span className="italic text-white/40">persischen</span> <br />
              Gastfreundschaft
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px bg-[#D4AF37]"
            />
          </div>

          {/* Right: Elegant Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 font-serif text-xl md:text-2xl font-light text-white/60 leading-relaxed"
          >
            <p className="text-white/90">
              PERSISCHE OASE INMITTEN HEILBRONNS.
            </p>
            <p>
              Bei uns treffen persische Gerichte auf authentische orientalische Einrichtung wie im Iran selbst. In unserem Restaurant möchten wir den Besuchern das Gefühl vermitteln mitten im Orient zu sein.
            </p>
            <p>
              Ein Ort, an dem man aus seiner eigenen täglichen Routine ausbrechen kann. Hierbei setzen wir auf die Stimulierung aller Sinne. Geschmacklich, akustisch und optisch.
            </p>
            <p className="italic text-[#D4AF37] pt-8">
              Kommen Sie vorbei und überzeugen Sie sich selbst.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
