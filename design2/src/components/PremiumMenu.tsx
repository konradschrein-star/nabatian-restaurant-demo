import React from 'react';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    category: "Vorspeisen",
    items: [
      {
        name: "Mirza Ghasemi",
        description: "Gegrillte Auberginen püriert mit Ei, Tomaten und reichlich Knoblauch. Serviert mit knusprigem Fladenbrot.",
        price: "8,90 €",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Vegetarisch"]
      },
      {
        name: "Kashk-e Bademjan",
        description: "Gebratene Auberginen, verfeinert mit persischer Molke, Röstzwiebeln und frischer Minze.",
        price: "8,50 €",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Vegetarisch"]
      }
    ]
  },
  {
    category: "Grill-Spezialitäten",
    items: [
      {
        name: "Kabab Kubideh",
        description: "Zwei saftige Spieße aus feinem Lamm- und Rinderhackfleisch. Serviert mit grillgetoasteter Tomate und Safran-Basmati.",
        price: "16,90 €",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Bestseller"]
      },
      {
        name: "Jujeh Kabab",
        description: "Zartes Hähnchenbrustfilet, über Nacht in einer edlen Safran-Zitronen-Marinade eingelegt.",
        price: "17,50 €",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Spezialität"]
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function PremiumMenu() {
  return (
    <div className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-primary font-bold tracking-wide mb-4"
          >
            Kulinarische Meisterwerke
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-secondary mx-auto mb-6"
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-sans"
          >
            Eine Auswahl unserer feinsten persischen Kreationen, zubereitet mit authentischen Gewürzen, 
            frischen Zutaten und jahrhundertealter Handwerkstradition.
          </motion.p>
        </div>

        {menuCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-24 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-serif text-gray-900 mb-10 pl-4 border-l-4 border-primary"
            >
              {category.category}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
              {category.items.map((item, itemIdx) => (
                <motion.div 
                  key={itemIdx} 
                  variants={itemVariants}
                  className="group flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-full sm:w-[140px] h-[140px] shrink-0 overflow-hidden rounded-xl shadow-lg relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-3">
                      <h4 className="text-xl font-bold font-sans text-gray-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-secondary ml-4 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-primary/10 text-primary rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
        
        <div className="text-center mt-16">
          <motion.a 
            href="/speisekarte/#full-menu"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-primary text-white px-10 py-4 uppercase tracking-[2px] text-sm font-semibold hover:bg-secondary transition-colors shadow-xl shadow-primary/20"
          >
            Vollständige Karte ansehen
          </motion.a>
        </div>
      </div>
    </div>
  );
}
