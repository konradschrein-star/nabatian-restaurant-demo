import { motion } from 'motion/react';

export default function VouchersPage() {
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
            Freude verschenken
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-light tracking-[-0.02em]"
          >
            Gutscheine
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 font-serif text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-xl"
            >
              <p>
                Mit unserem NABATIAN Gutschein verschenken Sie Genuss und persisches Esserlebnis zugleich. Ob Weihnachten, Geburtstag, Ostern, Muttertag oder nur so, um eine Freude zu bereiten. Gelegenheiten für einen Gutschein gibt es viele.
              </p>
              <p>
                Sie sind noch auf der Suche nach der passenden Aufmerksamkeit für Ihre Mitarbeiter? Anlässlich eines Firmenjubiläums oder einfach nur um Ihre Wertschätzung auszudrücken? Belohnen Sie Ihre Mitarbeiter mit ein wenig Urlaubsflair und einem persischen Esserlebnis.
              </p>
              <p className="italic text-[#D4AF37] pt-8">
                Gerne verschicken wir den Gutschein direkt an Ihren Lieblingsmensch. Füllen Sie einfach das Formular aus oder rufen Sie uns an.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 bg-white/5 p-8 border border-white/10"
            >
              <h3 className="font-serif text-3xl text-white mb-8">Gutschein anfragen</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Anfrage gesendet!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Vorname" title="Vorname" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
                  <input type="text" placeholder="Nachname" title="Nachname" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
                </div>
                <input type="email" placeholder="E-Mail Adresse" title="E-Mail Adresse" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" required />
                <div className="flex items-center gap-4">
                  <span className="text-white/60">Wert:</span>
                  <select 
                    title="Gutschein Wert"
                    className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer appearance-none flex-grow"
                  >
                    <option className="bg-[#050505]" value="50 €">50 €</option>
                    <option className="bg-[#050505]" value="100 €">100 €</option>
                    <option className="bg-[#050505]" value="150 €">150 €</option>
                    <option className="bg-[#050505]" value="200 €">200 €</option>
                    <option className="bg-[#050505]" value="Individueller Betrag">Individueller Betrag</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#D4AF37] text-[#050505] px-10 py-4 font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-500 mt-8">
                  Jetzt anfragen
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right: Overlapping Images */}
          <div className="relative order-1 lg:order-2 h-[500px] md:h-[700px] flex justify-center items-center">
            <div className="relative w-full max-w-lg h-full">
              <motion.img
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                src={`${import.meta.env.BASE_URL}Gutschein-RS-1-768x1024.jpg`}
                alt="Gutschein Rückseite"
                className="absolute top-[10%] right-0 w-[70%] rounded-sm shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
              <motion.img
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                src={`${import.meta.env.BASE_URL}Gutschein-VS-1-768x1024.jpg`}
                alt="Gutschein Vorderseite"
                className="absolute top-[20%] left-0 w-[70%] rounded-sm shadow-2xl border border-white/5 z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
