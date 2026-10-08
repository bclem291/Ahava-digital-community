import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { AcademySettings, ContactFormData } from '../types';

interface ContactPageProps {
  settings: AcademySettings;
  onOpenSettings?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  settings,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cleanWhatsappNumber = (rawNumber: string) => {
    return rawNumber.replace(/[^0-9]/g, '') || '2348022872299';
  };

  const validate = () => {
    const errs: Partial<ContactFormData> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.message.trim()) errs.message = 'Please type a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*AHAVA DIGITAL COMMUNITY - NEW CONTACT ENQUIRY*

*Name:* ${formData.name.trim()}
${formData.phone ? `*Phone:* ${formData.phone.trim()}\n` : ''}${formData.email ? `*Email:* ${formData.email.trim()}\n` : ''}*Message:*
${formData.message.trim()}`;

    setIsSubmitted(true);
    const targetNumber = cleanWhatsappNumber(settings.whatsappNumber);
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;

    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked', err);
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: settings.facebookUrl,
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: 'f',
    },
    {
      name: 'Instagram',
      url: settings.instagramUrl,
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90',
      icon: 'IG',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A1F44] tracking-tight">
          Contact Ahava Digital Community
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3">
          We are here to support your learning journey. Send a message, connect on WhatsApp (+2348022872299), or follow our social channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT CONTACT DETAILS */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 card-shadow space-y-6">
            <h2 className="text-xl font-bold text-[#0A1F44]">Support &amp; Community Desk</h2>

            <div className="space-y-5 text-sm">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FF] text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">
                    WhatsApp Chat Line
                  </span>
                  <a
                    href="https://wa.me/2348022872299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0A1F44] hover:text-[#38B6FF] transition-colors break-all"
                  >
                    +2348022872299
                  </a>
                  <span className="text-[11px] text-emerald-600 block mt-0.5 font-medium">
                    ● Available for instant chats
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FF] text-[#38B6FF] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">
                    Email Support
                  </span>
                  <a
                    href="mailto:ahavadigitalcommunity@gmail.com"
                    className="font-bold text-[#0A1F44] hover:text-[#38B6FF] transition-colors break-all"
                  >
                    ahavadigitalcommunity@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FF] text-[#0A1F44] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">
                    Community Headquarters
                  </span>
                  <span className="font-bold text-[#0A1F44]">
                    Nigeria (Online Campus &amp; Global Access)
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FF] text-[#0A1F44] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase block">
                    Support Hours
                  </span>
                  <span className="font-bold text-[#0A1F44]">
                    Monday – Saturday, 8:00 AM – 9:00 PM WAT
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Big Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/2348022872299?text=Hello%20Ahava%20Digital%20Community,%20I%20want%20to%20make%20enquiries."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat Instantly (+2348022872299)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* SOCIAL MEDIA CHANNELS (ONLY FACEBOOK & INSTAGRAM) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 card-shadow">
            <h3 className="text-base font-bold text-[#0A1F44] mb-3">
              Official Social Media Channels
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Follow Coach Clement for daily digital marketing tips and smartphone skill tutorials.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url.includes('[') ? '#' : item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-2xl text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-sm ${item.color}`}
                >
                  <span className="font-extrabold">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 card-shadow text-left">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF] block mb-1">
                Quick Enquiry
              </span>
              <h2 className="text-2xl font-black text-[#0A1F44]">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill the quick form below to send your message directly to our WhatsApp support line (+2348022872299) for an immediate response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Grace Obi"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 080..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. grace@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                  Your Message or Question <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Coach Clement, I would like to enquire about..."
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                />
                {errors.message && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#0A1F44] hover:bg-[#132D5C] active:scale-98 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#0A1F44]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send via WhatsApp</span>
                  <Send className="w-3.5 h-3.5 text-[#38B6FF]" />
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Message pre-filled and sent to WhatsApp tab!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
