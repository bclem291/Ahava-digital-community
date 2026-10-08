import React from 'react';
import {
  Rocket,
  ArrowRight,
  Laptop,
  Smartphone,
  Users,
  CheckCircle2,
  Megaphone,
  Palette,
  PackageOpen,
  BrainCircuit,
  Video,
  Target,
} from 'lucide-react';
import { COURSES_DATA, BENEFITS_DATA } from '../data/academyData';
import { CourseItem } from '../types';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onSelectCourse: (course: CourseItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectCourse }) => {
  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-7 h-7 text-[#38B6FF]" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-[#38B6FF]" />;
      case 'PackageOpen':
        return <PackageOpen className="w-7 h-7 text-[#38B6FF]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-7 h-7 text-[#38B6FF]" />;
      case 'Video':
        return <Video className="w-7 h-7 text-[#38B6FF]" />;
      case 'Target':
        return <Target className="w-7 h-7 text-[#38B6FF]" />;
      default:
        return <Target className="w-7 h-7 text-[#38B6FF]" />;
    }
  };

  const getBenefitIcon = (icon: string) => {
    switch (icon) {
      case 'Laptop':
        return <Laptop className="w-8 h-8 text-[#38B6FF]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-8 h-8 text-[#38B6FF]" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-[#38B6FF]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-[#38B6FF]" />;
      default:
        return <Laptop className="w-8 h-8 text-[#38B6FF]" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 bg-gradient-to-b from-[#F4F8FD] via-white to-white rounded-b-[40px] sm:rounded-b-[60px] border-b border-slate-100 shadow-sm">
        {/* Subtle decorative background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#38B6FF]/10 to-[#0A1F44]/5 blur-3xl -z-10 pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Trust badge without AI icons */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7FF] text-[#0A1F44] border border-[#38B6FF]/30 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#38B6FF]" />
            <span className="text-[#38B6FF] font-bold">Nigeria's No. 1</span>
            <span>Practical 6-in-1 Digital Skills Masterclass</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A1F44] tracking-tight leading-[1.15] mb-6">
            Learn High-Income Digital Skills and Start{' '}
            <span className="text-[#38B6FF] relative inline-block">
              Earning Online
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#38B6FF]/20 -z-10 rounded"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Join thousands of smart youths and creators at <strong className="text-[#0A1F44]">Ahava Digital Community</strong>. Master six in-demand digital skills using just your smartphone or laptop, and transform your financial reality.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] active:scale-95 text-white font-extrabold text-base tracking-wide shadow-xl shadow-[#38B6FF]/30 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Rocket className="w-5 h-5" />
              <span>Register Now — ₦30,000</span>
            </button>

            <button
              onClick={() => onNavigate('trainings')}
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 rounded-full border-2 border-[#0A1F44] hover:bg-[#0A1F44] hover:text-white text-[#0A1F44] font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore The 6 Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key Value Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/80">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <span className="block text-2xl font-black text-[#0A1F44]">6 in 1</span>
              <span className="text-xs text-slate-500 font-medium">Single Program Access</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <span className="block text-2xl font-black text-[#38B6FF]">₦30,000</span>
              <span className="text-xs text-slate-500 font-medium">One-Time Lifetime Fee</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <span className="block text-2xl font-black text-[#0A1F44]">90%+</span>
              <span className="text-xs text-slate-500 font-medium">Smartphone Friendly</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
              <span className="block text-2xl font-black text-[#38B6FF]">100%</span>
              <span className="text-xs text-slate-500 font-medium">Hands-On Practical</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AHAVA DIGITAL COMMUNITY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] tracking-tight">
            Why Ahava Digital Community?
          </h2>
          <p className="text-slate-600 text-base mt-3">
            We strip away technical fluff and provide the exact practical blueprint you need to start earning online immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 card-shadow card-shadow-hover relative flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#E8F7FF] group-hover:bg-[#38B6FF] transition-colors flex items-center justify-center mb-6">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#38B6FF] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0A1F44]">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF] mr-2" />
                <span>Guaranteed Community Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 COURSES PREVIEW SECTION (WITHOUT TOOLS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
            All-In-One Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1F44] tracking-tight">
            Six High-Income Skills. One Tuition.
          </h2>
          <p className="text-slate-600 text-base mt-3">
            You don't need to purchase separate courses. When you join Ahava Digital Community, you gain instant access to all six modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 card-shadow card-shadow-hover flex flex-col justify-between border-t-4 border-t-transparent hover:border-t-[#38B6FF] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F7FF] flex items-center justify-center">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{course.title}</h3>
                <p className="text-xs font-semibold text-[#38B6FF] mb-3">{course.tagline}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {course.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B6FF] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-xs font-bold text-[#38B6FF] hover:text-[#1FA2EF] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-[#0A1F44] hover:bg-[#132D5C] text-white transition-colors cursor-pointer"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('trainings')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#0A1F44] text-[#0A1F44] font-bold text-sm hover:bg-[#0A1F44] hover:text-white transition-all cursor-pointer"
          >
            <span>See Full Course Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* TUITION HIGHLIGHT BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0A1F44] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#38B6FF] text-xs font-bold uppercase tracking-wider border border-[#38B6FF]/30">
              Transparent &amp; Affordable
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              One Payment. All Six Premium Courses.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Why pay ₦25,000 to ₦50,000 separately for graphics, ads, or video editing? In Ahava Digital Community, pay just <strong className="text-white font-extrabold">₦30,000 once</strong> and unlock all six income-generating skill tracks with ongoing mentorship!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 line-through block">Regular Value: ₦120,000</span>
                <span className="text-4xl sm:text-5xl font-black text-[#38B6FF]">₦30,000</span>
                <span className="text-xs text-slate-300 block">One-time payment • Lifetime access</span>
              </div>

              <button
                onClick={() => onNavigate('register')}
                className="px-10 py-4 sm:py-5 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] active:scale-95 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-[#38B6FF]/30 transition-all flex items-center gap-3 cursor-pointer"
              >
                <span>Enroll Today at ₦30,000</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#0A1F44] to-[#132D5C] rounded-3xl p-8 sm:p-12 text-center text-white relative shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Ready to Build Your Online Income?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Do not let another month pass wishing you had high-income digital skills. Join Coach Clement and the Ahava Digital Community right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#38B6FF]/30 cursor-pointer"
            >
              Get Started Now — ₦30,000
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              Have Questions? Speak to Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
