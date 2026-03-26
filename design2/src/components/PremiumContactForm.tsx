import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PremiumContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-serif text-text-primary mb-4">Vielen Dank!</h2>
        <p className="text-text-secondary max-w-md mx-auto">
          Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium tracking-wider uppercase text-sm"
        >
          Zurück zum Formular
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Ihr vollständiger Name"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">E-Mail Adresse</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="E-Mail für Rückfragen"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Telefon / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              placeholder="Für schnellere Absprachen"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Datum der Reservierung</label>
            <input
              type="text"
              id="date"
              name="date"
              required
              value={formState.date}
              onChange={handleChange}
              placeholder="Z.B. 24.12.2024 um 19:00"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-text-secondary ml-1">Ihre Nachricht</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formState.message}
            onChange={handleChange}
            placeholder="Wie können wir Ihren Aufenthalt perfekt machen?"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none"
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition-all font-semibold tracking-[2px] uppercase text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Wird gesendet...
              </>
            ) : (
              <>
                Anfrage senden
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PremiumContactForm;
