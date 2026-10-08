import React, { useState } from 'react';
import {
  CreditCard,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { AcademySettings, RegistrationFormData } from '../types';

interface RegisterPageProps {
  settings: AcademySettings;
  onOpenSettings?: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  settings,
  onOpenSettings,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    ageRange: '',
    device: '',
    paymentRef: '',
  });

  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [previewMsg, setPreviewMsg] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const newErrors: Partial<RegistrationFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'State or Country is required';
    }
    if (!formData.ageRange) {
      newErrors.ageRange = 'Please select your age range';
    }
    if (!formData.device) {
      newErrors.device = 'Please select your preferred device';
    }
    if (!formData.paymentRef.trim()) {
      newErrors.paymentRef = 'Payment reference or name used on Selar is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const cleanWhatsappNumber = (rawNumber: string) => {
    const cleaned = rawNumber.replace(/[^0-9]/g, '');
    return cleaned || '2348022872299';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format neat WhatsApp text
    const message = `*AHAVA DIGITAL COMMUNITY - NEW STUDENT REGISTRATION*

*Full Name:* ${formData.fullName.trim()}
*WhatsApp Number:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*State / Country:* ${formData.location.trim()}
*Age Range:* ${formData.ageRange}
*Preferred Learning Device:* ${formData.device}
*Selar Payment Name / Ref:* ${formData.paymentRef.trim()}
*Tuition Fee:* ₦30,000 (All 6 Courses)

_I have completed my payment on Selar. Please verify my details and grant me instant access to the community portal and mentorship group._`;

    setPreviewMsg(message);
    setSubmitted(true);

    const waNum = cleanWhatsappNumber(settings.whatsappNumber);
    const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked, available via button', err);
    }
  };

  const copyToClipboard = () => {
    if (previewMsg) {
      navigator.clipboard.writeText(previewMsg);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selarUrl =
    settings.selarLink.startsWith('http') || settings.selarLink.startsWith('https')
      ? settings.selarLink
      : '#';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* HEADER & TUITION HIGHLIGHT */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#38B6FF] block mb-2">
          Registration Portal
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A1F44] tracking-tight">
          Enroll in Ahava Digital Community
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3">
          Follow the two simple steps below to make payment and submit your student profile.
        </p>

        {/* Clear Tuition Price Card */}
        <div className="mt-8 bg-[#0A1F44] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left border border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#38B6FF]">
                Full Tuition Fee
              </span>
              <span className="text-[11px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                All 6 Courses Included
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-black text-[#38B6FF]">₦30,000</span>
              <span className="text-sm text-slate-300 line-through">Value: ₦120,000</span>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              No hidden fees • Lifetime access to training materials • Community mentorship access
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-[#38B6FF] shrink-0" />
            <span className="text-xs text-slate-200">
              100% Secure Checkout via Selar (Cards, Bank Transfer, USSD)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* STEP 1: PAYMENT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 card-shadow border-l-4 border-l-[#38B6FF]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#38B6FF] text-white font-black text-sm flex items-center justify-center">
                1
              </div>
              <h2 className="text-xl font-bold text-[#0A1F44]">Step 1: Pay Tuition</h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Click the button below to pay your one-time <strong>₦30,000</strong> fee on Selar. You can pay with your Nigerian ATM Card, Bank Transfer, or USSD.
            </p>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 mb-6">
              <span className="text-xs font-bold text-[#0A1F44] block mb-1">
                Selar Link Destination:
              </span>
              <code className="text-[11px] text-[#0A1F44] font-mono break-all block bg-white p-2 rounded border border-slate-200">
                {settings.selarLink}
              </code>
              {settings.selarLink === '[PASTE SELAR LINK HERE]' && (
                <div className="mt-2 text-[11px] text-amber-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Placeholder active. Coach can paste link anytime.</span>
                </div>
              )}
            </div>

            <a
              href={selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#38B6FF] hover:bg-[#1FA2EF] active:scale-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#38B6FF]/30 transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay ₦30,000 on Selar Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Instant payment confirmation via email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Keep your payment receipt or reference ready</span>
              </div>
            </div>
          </div>

          {/* Quick Notice Card */}
          <div className="bg-[#E8F7FF] rounded-3xl p-6 border border-[#38B6FF]/30 text-xs text-[#0A1F44]">
            <h4 className="font-bold flex items-center gap-2 mb-2 text-sm text-[#0A1F44]">
              <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
              Already paid on Selar?
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Complete Step 2 on the right with your payment reference or full name used on Selar so our team can authenticate your registration and grant your community WhatsApp access immediately!
            </p>
          </div>
        </div>

        {/* STEP 2: REGISTRATION FORM COLUMN */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 card-shadow">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0A1F44] text-white font-black text-sm flex items-center justify-center">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1F44]">
                Step 2: Submit Student Registration
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Fill in your details accurately. Upon submission, it will send your verified registration to Coach Clement on WhatsApp (+2348022872299).
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Adeyemi"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                />
                {errors.fullName && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.fullName}</span>
                )}
              </div>

              {/* Phone / WhatsApp & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 08012345678 or +234..."
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. samuel@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Location & Age Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    State / Country <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Lagos, Nigeria"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.location ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                  />
                  {errors.location && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.location}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Age Range <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.ageRange}
                    onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.ageRange ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                  >
                    <option value="">Select Age Range...</option>
                    <option value="Under 18">Under 18</option>
                    <option value="18 - 25">18 - 25 years</option>
                    <option value="26 - 35">26 - 35 years</option>
                    <option value="36+">36 years and above</option>
                  </select>
                  {errors.ageRange && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.ageRange}</span>
                  )}
                </div>
              </div>

              {/* Preferred Learning Device */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                  Preferred Learning Device <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.device}
                  onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.device ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                >
                  <option value="">Select Preferred Device...</option>
                  <option value="Phone (Smartphone Only)">Phone (Smartphone Only)</option>
                  <option value="Laptop (PC / Mac Only)">Laptop (PC / Mac Only)</option>
                  <option value="Both Smartphone & Laptop">Both Smartphone &amp; Laptop</option>
                </select>
                {errors.device && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.device}</span>
                )}
              </div>

              {/* Payment Reference or Name on Selar */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                  Payment Reference / Name Used on Selar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.paymentRef}
                  onChange={(e) => setFormData({ ...formData, paymentRef: e.target.value })}
                  placeholder="e.g. Samuel Adeyemi or SELAR-TX-987654"
                  className={`w-full px-4 py-3.5 rounded-xl border ${
                    errors.paymentRef ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-[#38B6FF] focus:bg-white text-sm text-slate-800 transition-all`}
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Enter the exact name or transaction code on your Selar receipt.
                </span>
                {errors.paymentRef && (
                  <span className="text-xs text-rose-500 mt-1 block">{errors.paymentRef}</span>
                )}
              </div>

              {/* Submit to WhatsApp Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4.5 px-8 rounded-2xl bg-[#0A1F44] hover:bg-[#132D5C] active:scale-98 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-[#0A1F44]/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Submit &amp; Verify on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  Target WhatsApp: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">{settings.whatsappNumber}</code>
                </span>
              </div>
            </form>

            {/* FRIENDLY SUCCESS NOTIFICATION */}
            {submitted && (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-left animate-fade-in space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-[#0A1F44] text-base">
                      Registration Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
                      Your details have been formatted into an official verification ticket. A WhatsApp tab was opened to send your application to Coach Clement ({settings.whatsappNumber}).
                    </p>
                  </div>
                </div>

                {/* Pre-filled Message Preview Box */}
                <div className="bg-white p-4 rounded-xl border border-emerald-200 text-xs font-mono text-slate-700 whitespace-pre-line leading-relaxed shadow-sm">
                  {previewMsg}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${cleanWhatsappNumber(settings.whatsappNumber)}?text=${encodeURIComponent(previewMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Now</span>
                  </a>

                  <button
                    onClick={copyToClipboard}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Message'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
