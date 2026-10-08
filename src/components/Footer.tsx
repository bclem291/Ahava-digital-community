import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Layers } from 'lucide-react';
import { AcademySettings } from '../types';

interface FooterProps {
  settings: AcademySettings;
  onNavigate: (pageId: string) => void;
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onNavigate, onOpenSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'trainings', label: 'Curriculum & Courses' },
    { id: 'register', label: 'Registration Portal' },
    { id: 'about', label: 'About Coach Clement' },
    { id: 'faq', label: 'Frequently Asked Questions' },
    { id: 'contact', label: 'Contact Support' },
  ];

  const coursesList = [
    'Digital Marketing',
    'Smartphone Graphics Design',
    'Digital Product Creation',
    'AI Creator Mastery',
    'Video Editing',
    'Facebook & Instagram Ads',
  ];

  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38B6FF] to-[#0A1F44] flex items-center justify-center text-white border border-white/20 font-extrabold text-lg">
                A
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                AHAVA <span className="text-[#38B6FF]">DIGITAL</span> COMMUNITY
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering Nigerian youths and creators with practical, high-income digital skills that turn smartphones and laptops into sustainable daily income streams.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#38B6FF] border border-[#38B6FF]/30">
                <Layers className="w-3.5 h-3.5" />
                <span>6 Premium Courses for ₦30,000</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#38B6FF]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-300 hover:text-[#38B6FF] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-[#38B6FF] transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The 6 Courses */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#38B6FF]">
              Included Courses (All-in-One)
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {coursesList.map((course, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#38B6FF] text-xs font-bold">0{idx + 1}.</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={() => onNavigate('register')}
                className="text-xs text-[#38B6FF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                Enroll in all courses for ₦30,000 &rarr;
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#38B6FF]">
              Community Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#38B6FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp / Help Line:</span>
                  <a
                    href="https://wa.me/2348022872299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[#38B6FF] transition-colors"
                  >
                    {settings.whatsappNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#38B6FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Email:</span>
                  <a
                    href={`mailto:${settings.email}`}
                    className="font-medium text-white hover:text-[#38B6FF] transition-colors break-all"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#38B6FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Location:</span>
                  <span className="font-medium text-white">Nigeria (Online & Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Social Links (Only Facebook and Instagram - TikTok and YouTube removed) */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-semibold">Social Channels:</span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={settings.facebookUrl.includes('[') ? '#' : settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#38B6FF] hover:text-white transition-colors font-medium"
                  title="Facebook"
                >
                  Facebook
                </a>
                <a
                  href={settings.instagramUrl.includes('[') ? '#' : settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#38B6FF] hover:text-white transition-colors font-medium"
                  title="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Ahava Digital Community. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="text-slate-400 hover:text-[#38B6FF] transition-colors underline cursor-pointer"
              >
                Settings &amp; Links Config
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#38B6FF] hover:text-white text-slate-300 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
