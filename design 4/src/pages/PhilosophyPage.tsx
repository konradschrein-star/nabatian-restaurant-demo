import { motion } from 'motion/react';

export default function PhilosophyPage() {
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
            Unsere Geschichte
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-light tracking-[-0.02em]"
          >
            Philosophie
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] md:h-[800px]"
          >
            <img 
              src="/Authentisch_persisch_Fest.jpg" 
              alt="Persian Cuisine" 
              className="w-full h-full object-cover rounded-t-full rounded-b-3xl opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-t-full rounded-b-3xl transform rotate-2" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8 font-serif text-xl md:text-2xl font-light text-white/60 leading-relaxed"
          >
            <h2 className="text-4xl text-white mb-12">Eine persische Oase inmitten Heilbronns.</h2>
            <p>
              Bei uns treffen persische Gerichte auf authentische orientalische Einrichtung wie im Iran selbst. In unserem Restaurant möchten wir den Besuchern das Gefühl vermitteln mitten im Orient zu sein.
            </p>
            <p>
              Ein Ort, an dem man aus seiner eigenen täglichen Routine ausbrechen kann. Hierbei setzen wir auf die Stimulierung aller Sinne. Geschmacklich, akustisch und optisch.
            </p>
            <p>
              Unsere Zutaten werden täglich frisch ausgewählt und nach traditionellen Rezepten zubereitet, die seit Generationen in unserer Familie weitergegeben werden. Jedes Gericht erzählt eine Geschichte aus dem alten Persien.
            </p>
            <p className="italic text-[#D4AF37] pt-8">
              Wir laden Sie ein, Teil dieser Geschichte zu werden.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
