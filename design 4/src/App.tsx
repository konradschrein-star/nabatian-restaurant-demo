/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FooterSection from './components/FooterSection';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import PhilosophyPage from './pages/PhilosophyPage';
import VouchersPage from './pages/VouchersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-white bg-[#050505] selection:bg-[#D4AF37] selection:text-[#050505] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speisekarte" element={<MenuPage />} />
            <Route path="/philosophie" element={<PhilosophyPage />} />
            <Route path="/gutscheine" element={<VouchersPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </Router>
  );
}
