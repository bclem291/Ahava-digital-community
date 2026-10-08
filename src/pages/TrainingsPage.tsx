import React from 'react';
import {
  Megaphone,
  Palette,
  PackageOpen,
  BrainCircuit,
  Video,
  Target,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Smartphone,
  Layers,
} from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';
import { CourseItem } from '../types';

interface TrainingsPageProps {
  onNavigate: (pageId: string) => void;
  onSelectCourse: (course: CourseItem) => void;
}

export const TrainingsPage: React.FC<TrainingsPageProps> = ({
  onNavigate,
  onSelectCourse,
}) => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-8 h-8 text-[#38B6FF]" />;
      case 'Palette':
        return <Palette className="w-8 h-8 text-[#38B6FF]" />;
      case 'PackageOpen':
        return <PackageOpen className="w-8 h-8 text-[#38B6FF]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-8 h-8 text-[#38B6FF]" />;
      case 'Video':
        return <Video className="w-8 h-8 text-[#38B6FF]" />;
      case 'Target':
        return <Target className="w-8 h-8 text-[#38B6FF]" />;
      default:
        return <Target className="w-8 h-8 text-[#38B6FF]" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* HEADER EXPLANATION OF THE ONE PROGRAM */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7FF] text-[#0A1F44] border border-[#38B6FF]/30 text-xs sm:text-sm font-bold mb-4">
          <Layers className="w-4 h-4 text-[#38B6FF]" />
          <span>The All-In-One Community Advantage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A1F44] tracking-tight leading-tight">
          One Single Program. Six Lucrative Skills.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
          At <strong className="text-[#0A1F44]">Ahava Digital Community</strong>, we do not sell isolated courses. Our curriculum is structured as a complete, comprehensive program: <strong className="text-[#38B6FF]">you pay once (₦30,000) and unlock all six courses below</strong> for lifetime access!
        </p>

        {/* Highlighted Value Card */}
        <div className="mt-8 bg-gradient-to-r from-[#0A1F44] to-[#132D5C] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#38B6FF] block mb-1">
              One-Time Community Tuition
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white">₦30,000 Total</div>
            <p className="text-xs text-slate-300 mt-1">
              Includes full access to all 6 modules, updates, mentorship, and community support.
            </p>
          </div>
          <button
            onClick={() => onNavigate('register')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#38B6FF]/30 whitespace-nowrap cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* 6 COURSES GRID (NO TOOLS SHOWN) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES_DATA.map((course, idx) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl p-8 border border-slate-100 card-shadow card-shadow-hover flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top decorative pill */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F7FF] group-hover:bg-[#0A1F44] transition-colors flex items-center justify-center">
                {getCourseIcon(course.iconName)}
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-[#38B6FF] transition-colors">
                Module 0{idx + 1}
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-2">{course.title}</h2>
              <p className="text-xs font-semibold text-[#38B6FF] mb-4">{course.tagline}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              {/* What You Will Learn List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44] block mb-2">
                  What you will learn:
                </span>
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38B6FF] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onSelectCourse(course)}
                className="text-xs font-bold text-[#38B6FF] hover:text-[#1FA2EF] flex items-center gap-1 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('register')}
                className="px-5 py-2 rounded-full bg-[#0A1F44] hover:bg-[#38B6FF] text-white text-xs font-bold transition-all cursor-pointer"
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* WHAT IS INCLUDED WITH YOUR ₦30,000 TUITION (WITHOUT CERTIFICATE & WITHOUT RESOURCE VAULT) */}
      <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200">
        <h3 className="text-2xl font-bold text-[#0A1F44] text-center mb-8">
          Everything Included in Your ₦30,000 Enrollment
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#38B6FF] mb-3" />
            <h4 className="font-bold text-sm text-[#0A1F44] mb-1">Lifetime Access</h4>
            <p className="text-xs text-slate-600">
              Watch videos at your own pace, re-watch anytime with future curriculum updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Smartphone className="w-8 h-8 text-[#38B6FF] mb-3" />
            <h4 className="font-bold text-sm text-[#0A1F44] mb-1">Smartphone Actionable</h4>
            <p className="text-xs text-slate-600">
              Complete the practical assignments and learn high-income skills using just your mobile phone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Users className="w-8 h-8 text-[#38B6FF] mb-3" />
            <h4 className="font-bold text-sm text-[#0A1F44] mb-1">Community Mentorship</h4>
            <p className="text-xs text-slate-600">
              Direct access inside the student community for questions, live Q&amp;A sessions, and guidance.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('register')}
            className="px-10 py-4 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#38B6FF]/30 transition-all cursor-pointer"
          >
            Join Ahava Digital Community (₦30,000)
          </button>
        </div>
      </div>
    </div>
  );
};
