import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactInfo } from '../data/portfolioData';
import { SocialLinks } from '../components/SocialLinks';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactSectionProps {
  onOpenEmail?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEmail }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [lastSent, setLastSent] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    gmailLink: string;
    mailtoLink: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contactInfo.email
    )}&su=${encodeURIComponent(`[Portfolio Contact] ${formData.subject}`)}&body=${encodeURIComponent(
      `Hello Vasu,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      // Fire celebration confetti
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 }
      });

      // Submit to FormSubmit endpoint for direct email delivery to vasurachhadiya@gmail.com
      try {
        await fetch("https://formsubmit.co/ajax/vasurachhadiya@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: `Portfolio Inquiry: ${formData.subject} from ${formData.name}`,
            message: formData.message
          })
        });
      } catch (err) {
        console.log("Direct background delivery attempted", err);
      }

      setLastSent({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        gmailLink: gmailUrl,
        mailtoLink: mailtoUrl
      });

      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Have an opportunity, collaboration idea, or project to discuss? Drop me a line or connect across my platforms.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 backdrop-blur-xl h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Direct communication channels for engineering roles and collaborations.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group hover:border-slate-700 transition-colors">
                    <div 
                      onClick={onOpenEmail}
                      className="flex items-center space-x-3.5 overflow-hidden cursor-pointer"
                      title="Click to open email options (Gmail / Copy / Mail App)"
                    >
                      <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-mono text-slate-400">Direct Email</p>
                        <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors truncate block">
                          {contactInfo.email}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 ml-2 shrink-0">
                      <button
                        type="button"
                        onClick={onOpenEmail}
                        className="px-2.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-mono transition-colors border border-sky-500/30"
                        title="Open email options"
                      >
                        Compose
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopy(contactInfo.email, 'email')}
                        className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Copy email address"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group">
                    <div className="flex items-center space-x-3.5">
                      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-400">Phone & WhatsApp</p>
                        <a
                          href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                          className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(contactInfo.phone, 'phone')}
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">Current Location</p>
                      <p className="text-sm font-semibold text-white">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Profiles & Links */}
                <div>
                  <p className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3">
                    Developer Presence
                  </p>
                  <SocialLinks onOpenEmail={onOpenEmail} size="lg" className="flex-wrap pt-1" />
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs text-slate-400 font-mono">
                  Usually responds within 24 hours.
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below to initiate direct contact.
                </p>
              </div>

              {submitStatus === 'success' && lastSent && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-white">Message Transmitted Successfully!</p>
                      <p className="text-xs sm:text-sm text-emerald-300/90 mt-0.5">
                        Your message for <span className="font-mono font-bold text-white">vasurachhadiya@gmail.com</span> has been dispatched.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap gap-2">
                    <a
                      href={lastSent.gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Gmail Web</span>
                    </a>

                    <a
                      href={lastSent.mailtoLink}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <span>Default Mail Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `To: vasurachhadiya@gmail.com\nSubject: ${lastSent.subject}\nFrom: ${lastSent.name} (${lastSent.email})\n\n${lastSent.message}`
                        );
                        alert("Message copied to clipboard!");
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start space-x-3 text-rose-300">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Unable to process message</p>
                    <p className="mt-0.5 text-rose-400/90">
                      Please send an email directly to <a href={`mailto:${contactInfo.email}`} className="underline font-bold">{contactInfo.email}</a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={e => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={e => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Developer Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={e => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formData.message}
                    onChange={e => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-bold transition-all duration-200 shadow-lg shadow-sky-500/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin text-slate-950" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
