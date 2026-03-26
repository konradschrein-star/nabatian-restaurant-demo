import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Kashk-e Bademjan',
    description: 'Gebratene Auberginen mit persischer Molke, Röstzwiebeln, Knoblauch und Minze.',
    price: '8.50',
    category: 'Vorspeise'
  },
  {
    name: 'Chelo Kabab Koobideh',
    description: 'Zwei Spieße aus fein gewürztem Lamm- und Rinderhackfleisch, serviert mit Safranreis und gegrillter Tomate.',
    price: '16.90',
    category: 'Hauptgericht'
  },
  {
    name: 'Ghormeh Sabzi',
    description: 'Traditioneller Kräutereintopf mit Lammfleisch, roten Bohnen und getrockneten Limetten, serviert mit Safranreis.',
    price: '18.50',
    category: 'Hauptgericht'
  },
  {
    name: 'Bastani Sonati',
    description: 'Traditionelles persisches Safran-Eis mit Pistazien und Rosenwasser.',
    price: '6.50',
    category: 'Dessert'
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 md:py-48 bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-6"
          >
            Kulinarik
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-light tracking-[-0.02em]"
          >
            Signature Dishes
          </motion.h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-16">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                <div className="flex items-baseline gap-6">
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                    {item.name}
                  </h3>
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 hidden md:inline-block">
                    {item.category}
                  </span>
                </div>
                
                {/* Dotted Leader */}
                <div className="flex-grow border-b border-dotted border-white/20 relative -top-2 opacity-50 group-hover:border-[#D4AF37]/50 transition-colors duration-500 hidden md:block" />
                
                <span className="font-serif text-2xl md:text-3xl text-[#D4AF37] font-light">
                  {item.price}
                </span>
              </div>
              <p className="font-serif text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Full Menu Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-32"
        >
          <Link
            to="/speisekarte"
            className="inline-block border-b border-white/20 hover:border-[#D4AF37] text-white/40 hover:text-[#D4AF37] pb-2 font-sans text-[10px] uppercase tracking-[0.2em] transition-colors duration-500"
          >
            Gesamte Speisekarte ansehen
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
