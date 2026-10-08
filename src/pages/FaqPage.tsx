import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Search } from 'lucide-react';
import { FAQS_DATA } from '../data/academyData';
import { AcademySettings } from '../types';

interface FaqPageProps {
  settings: AcademySettings;
  onNavigate: (pageId: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ settings, onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cleanWhatsappNumber = (rawNumber: string) => {
    return rawNumber.replace(/[^0-9]/g, '') || '2348022872299';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
          Got Questions? We Have Answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A1F44] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3">
          Everything you need to know about the 6-in-1 program, payment process, and learning experience at Ahava Digital Community.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. laptop, classes, payment...)"
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38B6FF] text-sm text-slate-800"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* ACCORDION LIST (CERTIFICATE REMOVED) */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-7 h-7 rounded-xl bg-[#E8F7FF] text-[#38B6FF] font-bold text-xs flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-bold text-base sm:text-lg text-[#0A1F44] group-hover:text-[#38B6FF] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-[#E8F7FF] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#38B6FF] text-white' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-[#F8FAFC]/50 animate-fade-in text-left">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="font-bold text-slate-700">No matching questions found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another keyword or ask us directly on WhatsApp.
            </p>
          </div>
        )}
      </div>

      {/* STILL HAVE QUESTIONS CARD */}
      <div className="bg-[#0A1F44] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF]">
            Need Personal Guidance?
          </span>
          <h3 className="text-2xl font-black text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Coach Clement and the community support team are ready on WhatsApp (+2348022872299) to assist you with inquiries, bank transfers, or curriculum details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href={`https://wa.me/${cleanWhatsappNumber(settings.whatsappNumber)}?text=${encodeURIComponent(
              'Hello Coach Clement, I have a question about Ahava Digital Community.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('register')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Register (₦30k)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
