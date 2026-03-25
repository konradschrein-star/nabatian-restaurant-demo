import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Replace with actual Formspree or Resend endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          guests: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-['Maven_Pro'] font-medium mb-6">Kontaktformular</h3>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
          Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
          Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-['Maven_Pro'] font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-['Maven_Pro'] font-medium mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-['Maven_Pro'] font-medium mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block font-['Maven_Pro'] font-medium mb-2">
            Art der Anfrage
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          >
            <option value="">Bitte wählen...</option>
            <option value="restaurant">Restaurant Reservierung</option>
            <option value="catering-hochzeit">Catering - Hochzeit</option>
            <option value="catering-firmenevent">Catering - Firmenevent</option>
            <option value="catering-geburtstag">Catering - Geburtstag</option>
            <option value="catering-privat">Catering - Private Feier</option>
            <option value="andere">Andere Anfrage</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block font-['Maven_Pro'] font-medium mb-2">
            Gewünschtes Datum
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block font-['Maven_Pro'] font-medium mb-2">
            Anzahl Personen
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-['Maven_Pro'] font-medium mb-2">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#711521]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#711521] hover:bg-[#6B1C1C] text-white font-['Maven_Pro'] font-medium text-lg px-8 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </form>
    </div>
  );
}
