import React from 'react';
import { Target, Eye, Award, CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
          Our Foundation &amp; Story
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A1F44] tracking-tight">
          About Ahava Digital Community
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3">
          Democratizing high-income digital education across Nigeria and Africa through smartphone-first mastery.
        </p>
      </div>

      {/* COACH CLEMENT STORY SECTION */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 card-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo Placeholder Column */}
          <div className="lg:col-span-5 text-center">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0A1F44] via-[#132D5C] to-[#06142E] p-8 text-white aspect-[4/5] flex flex-col items-center justify-center">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#38B6FF] text-[#0A1F44] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                Founder &amp; Lead Coach
              </div>

              {/* Avatar Icon */}
              <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-[#38B6FF] flex items-center justify-center text-4xl font-black text-[#38B6FF] mb-4 shadow-inner">
                CC
              </div>

              <h3 className="text-2xl font-black text-white">Coach Clement</h3>
              <span className="text-xs text-[#38B6FF] font-semibold uppercase tracking-wider block mt-1">
                Founder, Ahava Digital Community
              </span>

              {/* Explicit placeholder text */}
              <div className="mt-6 bg-white/10 p-3 rounded-xl border border-dashed border-[#38B6FF]/50 text-xs text-slate-200">
                <span className="font-mono text-[#38B6FF] block font-bold mb-1">
                  [COACH CLEMENT PHOTO PLACEHOLDER]
                </span>
                <span>Upload your portrait here (PNG/JPG, 600x750px recommended)</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 font-semibold text-[#0A1F44]">
                <Users className="w-3.5 h-3.5 text-[#38B6FF]" /> 1,500+ Community Members
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#0A1F44]">
                <Award className="w-3.5 h-3.5 text-[#38B6FF]" /> 6+ Years Experience
              </span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF] block mb-1">
                From The Founder's Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A1F44]">
                The Story Behind Ahava Digital Community
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Welcome to <strong>Ahava Digital Community</strong>! I am <strong>Coach Clement</strong>, founder and lead instructor. Like many young Nigerians, my journey began with a hunger for financial independence, scrolling through the internet searching for honest ways to earn a legitimate living.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Back then, I encountered complicated tutorials, expensive tools requiring high-end laptops, and people selling incomplete courses for exorbitant fees. When I finally discovered how simple smartphone graphics, digital product packaging, and Meta ads could generate continuous income, I made a personal pledge.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I founded Ahava Digital Community to remove every barrier between ordinary people and extraordinary digital income. <em>"Ahava"</em> signifies unconditional commitment and love—the genuine passion to see our community members succeed, earn their first ₦100,000, ₦500,000, and build resilient online income streams.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-[#E8F7FF] text-[#0A1F44] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>Zero Laptop Barrier</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#E8F7FF] text-[#0A1F44] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>One Transparent Fee (₦30k)</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#E8F7FF] text-[#0A1F44] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>Hands-on Student Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION & VISION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 card-shadow relative group">
          <div className="w-14 h-14 rounded-2xl bg-[#E8F7FF] flex items-center justify-center text-[#38B6FF] mb-6">
            <Target className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF] block mb-2">
            Our Mission
          </span>
          <h3 className="text-2xl font-black text-[#0A1F44] mb-4">
            Practical, Accessible &amp; Immediate Impact
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To provide high-quality, accessible, and affordable digital education that yields instant financial results. We equip everyday individuals with monetization systems they can apply from day one.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 card-shadow relative group">
          <div className="w-14 h-14 rounded-2xl bg-[#0A1F44] flex items-center justify-center text-[#38B6FF] mb-6">
            <Eye className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF] block mb-2">
            Our Vision
          </span>
          <h3 className="text-2xl font-black text-[#0A1F44] mb-4">
            Empowering 1 Million African Youths
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To be Africa's leading community for practical digital skills, empowering 1 million youths and creators to break free from unemployment and become financially independent digital entrepreneurs.
          </p>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
        <h3 className="text-2xl font-black text-[#0A1F44] text-center mb-8">
          The Ahava Digital Community Pillars
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E8F7FF] text-[#38B6FF] flex items-center justify-center font-bold text-sm mb-3">
              01
            </div>
            <h4 className="font-bold text-base text-[#0A1F44] mb-2">100% Practical</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No long theoretical lectures. Every video teaches an actionable skill you recreate on your own device immediately.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E8F7FF] text-[#38B6FF] flex items-center justify-center font-bold text-sm mb-3">
              02
            </div>
            <h4 className="font-bold text-base text-[#0A1F44] mb-2">Integrity First</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We teach genuine, sustainable digital skills and ethical monetization—no get-rich-quick scams or false promises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E8F7FF] text-[#38B6FF] flex items-center justify-center font-bold text-sm mb-3">
              03
            </div>
            <h4 className="font-bold text-base text-[#0A1F44] mb-2">Total Inclusivity</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Education should not be restricted by expensive gadgets. If you have an Android or iPhone, you belong here.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E8F7FF] text-[#38B6FF] flex items-center justify-center font-bold text-sm mb-3">
              04
            </div>
            <h4 className="font-bold text-base text-[#0A1F44] mb-2">Active Mentorship</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You are never left alone to figure things out. Our support community answers questions and reviews your work.
            </p>
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('register')}
          className="px-10 py-4 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#38B6FF]/30 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Join Coach Clement's Community (₦30,000)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
