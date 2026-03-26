import { motion } from 'motion/react';

const categories = [
  {
    title: 'Vorspeisen',
    items: [
      { name: 'Kashk-e Bademjan', description: 'Gebratene Auberginen mit persischer Molke, Röstzwiebeln, Knoblauch und Minze.', price: '8.50' },
      { name: 'Mirza Ghasemi', description: 'Gegrillte Auberginen mit Tomaten, Knoblauch und Ei.', price: '8.90' },
      { name: 'Mast-o Khiar', description: 'Persischer Joghurt mit Gurken und Minze.', price: '5.50' },
      { name: 'Zeytoon Parvardeh', description: 'Marinierte Oliven mit Granatapfelsirup und Walnüssen.', price: '6.90' }
    ]
  },
  {
    title: 'Hauptgerichte',
    items: [
      { name: 'Chelo Kabab Koobideh', description: 'Zwei Spieße aus fein gewürztem Lamm- und Rinderhackfleisch, serviert mit Safranreis und gegrillter Tomate.', price: '16.90' },
      { name: 'Joojeh Kabab', description: 'In Safran und Zitrone marinierte Hähnchenbruststücke vom Spieß, serviert mit Safranreis.', price: '17.50' },
      { name: 'Ghormeh Sabzi', description: 'Traditioneller Kräutereintopf mit Lammfleisch, roten Bohnen und getrockneten Limetten, serviert mit Safranreis.', price: '18.50' },
      { name: 'Fesenjan', description: 'Hähnchenkeule in einer süß-sauren Granatapfel-Walnuss-Soße, serviert mit Safranreis.', price: '19.90' }
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Bastani Sonati', description: 'Traditionelles persisches Safran-Eis mit Pistazien und Rosenwasser.', price: '6.50' },
      { name: 'Faloodeh', description: 'Gefrorene Glasnudeln in Rosenwasser-Zitronen-Sirup.', price: '6.00' },
      { name: 'Baklava', description: 'Süßes Gebäck aus Blätterteig, gefüllt mit gehackten Nüssen und in Sirup getränkt.', price: '5.50' }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-6"
          >
            Unsere Speisen
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-light tracking-[-0.02em]"
          >
            Speisekarte
          </motion.h1>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl text-[#D4AF37] font-light mb-12 border-b border-white/10 pb-4"
              >
                {category.title}
              </motion.h2>
              
              <div className="space-y-12">
                {category.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                        {item.name}
                      </h3>
                      
                      {/* Dotted Leader */}
                      <div className="flex-grow border-b border-dotted border-white/20 relative -top-2 opacity-50 group-hover:border-[#D4AF37]/50 transition-colors duration-500 hidden md:block" />
                      
                      <span className="font-serif text-xl md:text-2xl text-[#D4AF37] font-light whitespace-nowrap">
                        {item.price} €
                      </span>
                    </div>
                    <p className="font-serif text-lg text-white/50 font-light max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
