import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSettings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'trainings', label: 'Trainings' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1F44]/95 backdrop-blur-md shadow-lg shadow-[#0A1F44]/20 py-3.5'
            : 'bg-[#0A1F44] py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Community Name / Logo on the left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Ahava Digital Community Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38B6FF] to-[#0A1F44] flex items-center justify-center text-white shadow-md shadow-[#38B6FF]/30 border border-white/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg tracking-wider">A</span>
            </div>
            <div>
              <div className="text-white font-extrabold tracking-tight text-lg sm:text-xl leading-none flex items-center gap-1">
                AHAVA <span className="text-[#38B6FF]">DIGITAL</span>
              </div>
              <span className="text-white/60 text-[10px] sm:text-xs tracking-widest font-semibold uppercase block mt-1">
                COMMUNITY • NIGERIA
              </span>
            </div>
          </button>

          {/* Right Action Area with 3-bar Hamburger Menu (Displayed on Desktop & Mobile as requested) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => handleNavClick('register')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#38B6FF] hover:bg-[#1FA2EF] text-white transition-all shadow-md shadow-[#38B6FF]/20 active:scale-95"
            >
              <span>Register (₦30,000)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* 3-bar Hamburger Icon (Functional on desktop & mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white flex flex-col items-center justify-center gap-1.5 transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#38B6FF]"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              title="Menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                  isOpen ? 'translate-y-2 rotate-45 bg-[#38B6FF]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-opacity duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                  isOpen ? '-translate-y-2 -rotate-45 bg-[#38B6FF]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#0A1F44]/60 backdrop-blur-sm z-40 transition-opacity animate-fade-in"
        />
      )}

      {/* Dropdown / Slide-out Menu (Used on Desktop too) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Menu Header */}
          <div className="bg-[#0A1F44] px-6 py-6 flex items-center justify-between text-white border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#38B6FF] font-bold block mb-1">
                Navigation Menu
              </span>
              <h2 className="text-lg font-bold text-white">Ahava Digital Community</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Program Value Badge */}
          <div className="bg-sky-50 px-6 py-3.5 border-b border-sky-100 flex items-center justify-between text-xs">
            <span className="text-[#0A1F44] font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#38B6FF]" /> 6 Courses • 1 Program
            </span>
            <span className="bg-[#0A1F44] text-white px-2.5 py-0.5 rounded-full font-bold">
              ₦30,000
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 sm:p-6 space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-semibold text-base transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#0A1F44] text-white shadow-md shadow-[#0A1F44]/20'
                      : 'text-[#0A1F44] hover:bg-slate-100 hover:text-[#38B6FF]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#38B6FF]' : 'bg-transparent group-hover:bg-[#38B6FF]'
                      }`}
                    />
                    {item.label}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-[#38B6FF]' : 'text-slate-400 group-hover:text-[#38B6FF]'
                    }`}
                  />
                </button>
              );
            })}

            {/* Direct CTA Link in Menu */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <button
                onClick={() => handleNavClick('register')}
                className={`w-full text-center py-4 px-6 rounded-2xl font-bold text-white text-base shadow-lg transition-all flex items-center justify-center gap-2 ${
                  currentPage === 'register'
                    ? 'bg-[#0A1F44] ring-2 ring-[#38B6FF]'
                    : 'bg-[#38B6FF] hover:bg-[#1FA2EF] shadow-[#38B6FF]/30 active:scale-98'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Register Now — ₦30,000</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Menu Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
          <p className="font-medium text-[#0A1F44]">Ahava Digital Community</p>
          <p className="mt-1">Empowering you with high-income skills you can run on smartphone or laptop.</p>
          {onOpenSettings && (
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSettings();
              }}
              className="mt-3 text-xs text-[#38B6FF] hover:underline font-semibold flex items-center gap-1"
            >
              Settings &amp; Links Config
            </button>
          )}
        </div>
      </div>
    </>
  );
};
