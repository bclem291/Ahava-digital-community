/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfigModal } from './components/ConfigModal';
import { CourseModal } from './components/CourseModal';
import { HomePage } from './pages/HomePage';
import { TrainingsPage } from './pages/TrainingsPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { DEFAULT_SETTINGS } from './data/academyData';
import { AcademySettings, CourseItem } from './types';
import { Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [settings, setSettings] = useState<AcademySettings>(() => {
    const saved = localStorage.getItem('ahava_community_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_SETTINGS;
      }
    }
    return DEFAULT_SETTINGS;
  });

  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'trainings', 'register', 'about', 'faq', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveSettings = (newSettings: AcademySettings) => {
    setSettings(newSettings);
    localStorage.setItem('ahava_community_settings', JSON.stringify(newSettings));
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Poppins']">
      {/* TOP ANNOUNCEMENT TICKER (NO AI ICONS) */}
      <div className="bg-[#0A1F44] border-b border-white/10 text-white text-[11px] sm:text-xs py-2 px-4 text-center flex items-center justify-center gap-2">
        <Layers className="w-3.5 h-3.5 text-[#38B6FF]" />
        <span>
          <strong className="text-[#38B6FF]">Ahava Digital Community 2026 Registration Live:</strong> Pay just ₦30,000 once &amp; learn all 6 high-income digital courses!
        </span>
        <button
          onClick={() => navigateTo('register')}
          className="ml-2 underline font-bold text-[#38B6FF] hover:text-white cursor-pointer"
        >
          Enroll Now &rarr;
        </button>
      </div>

      {/* STICKY HEADER */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSettings={() => setIsConfigOpen(true)}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 pt-20">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {currentPage === 'trainings' && (
          <TrainingsPage
            onNavigate={navigateTo}
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {currentPage === 'register' && (
          <RegisterPage
            settings={settings}
            onOpenSettings={() => setIsConfigOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            settings={settings}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            settings={settings}
            onOpenSettings={() => setIsConfigOpen(true)}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        settings={settings}
        onNavigate={navigateTo}
        onOpenSettings={() => setIsConfigOpen(true)}
      />

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <FloatingWhatsApp settings={settings} />

      {/* COURSE MODAL */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onRegister={() => navigateTo('register')}
      />

      {/* SETTINGS CONFIG MODAL */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        settings={settings}
        onSaveSettings={handleSaveSettings}
      />
    </div>
  );
}
