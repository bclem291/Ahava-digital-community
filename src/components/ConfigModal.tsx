import React, { useState } from 'react';
import { X, Check, RotateCcw, Link as LinkIcon, MessageSquare, Mail } from 'lucide-react';
import { AcademySettings } from '../types';
import { DEFAULT_SETTINGS } from '../data/academyData';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AcademySettings;
  onSaveSettings: (newSettings: AcademySettings) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
}) => {
  const [formData, setFormData] = useState<AcademySettings>(settings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData(DEFAULT_SETTINGS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1F44]/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF]">
              Coach Clement's Links
            </span>
            <h3 className="text-xl font-extrabold text-[#0A1F44]">
              Community Settings &amp; Links
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
          Update your active links below or manage defaults for Ahava Digital Community.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
          {/* Selar Payment Link */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-[#38B6FF]" />
              Selar Payment Link
            </label>
            <input
              type="text"
              value={formData.selarLink}
              onChange={(e) => setFormData({ ...formData, selarLink: e.target.value })}
              placeholder="e.g. https://selar.co/m/ahava-digital"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38B6FF] text-sm text-slate-800"
            />
            <span className="text-[11px] text-slate-400 block mt-1">
              Current default: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">[PASTE SELAR LINK HERE]</code>
            </span>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp Number
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="e.g. +2348022872299"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38B6FF] text-sm text-slate-800"
            />
            <span className="text-[11px] text-slate-400 block mt-1">
              Official WhatsApp: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">+2348022872299</code>
            </span>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#38B6FF]" />
              Support Email
            </label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ahavadigitalcommunity@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38B6FF] text-sm text-slate-800"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#38B6FF] hover:bg-[#1FA2EF] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#38B6FF]/30 flex items-center gap-1.5 cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
