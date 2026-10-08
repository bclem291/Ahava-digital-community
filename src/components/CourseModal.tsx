import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CourseItem } from '../types';

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
  onRegister: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onRegister,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1F44]/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF] block mb-1">
              Part of the Ahava Digital Community 6-in-1 Program
            </span>
            <h3 className="text-2xl font-black text-[#0A1F44]">{course.title}</h3>
            <p className="text-sm font-semibold text-[#38B6FF] mt-0.5">{course.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-left">
          <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
              Key Learning Modules & Practical Outcomes
            </h4>
            <div className="space-y-2.5">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38B6FF] mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1F44] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <span className="text-[11px] text-[#38B6FF] font-bold uppercase tracking-wider block">
                Tuition Includes All 6 Courses
              </span>
              <span className="text-xl font-extrabold text-white">₦30,000 One-time</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onRegister();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#38B6FF] hover:bg-[#1FA2EF] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
