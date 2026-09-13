'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Check if EmailJS is configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Simulate success when not configured
      setTimeout(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! (Demo mode - EmailJS not configured)'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: profile.email
        },
        publicKey
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="border-2 border-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <a href={`mailto:${profile.email}`} className="text-gray-300 hover:text-white transition">
                {profile.email}
              </a>
            </div>

            <div className="border-2 border-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <a href={`tel:${profile.phone}`} className="text-gray-300 hover:text-white transition">
                {profile.phone}
              </a>
            </div>

            <div className="border-2 border-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-gray-300">{profile.location}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-white text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-white text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-white text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black border-2 border-white text-white focus:outline-none focus:border-purple-500 resize-none"
                required
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 border-2 border-green-500 text-green-300'
                    : 'bg-red-500/20 border-2 border-red-500 text-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
