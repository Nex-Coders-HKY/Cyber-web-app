'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

function SignUpContent() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    // Strict Email Format Regex Check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setError('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid phone number (e.g. 0319-8647809).');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreeTerms) {
      setError('You must agree to the Terms of Service.');
      return;
    }

    try {
      setLoading(true);

      // 1. Firebase account create karega
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // 2. Verification email bhejega
      await sendEmailVerification(userCredential.user);

      // 3. Force Sign Out untill verified
      await signOut(auth);

      setSuccess('Account created! Verification email has been sent. Please check your inbox OR Spam Folder and verify before logging in.');
      
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');

    } catch (err: any) {
      if (err.code === 'auth/invalid-email') {
        setError('Invalid email address format.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message || 'Failed to register account.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
      <div className="bg-[#13131e] border border-[#2a2a3a] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#43e97b]/20 blur-3xl pointer-events-none" />

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6c63ff] via-[#818cf8] to-[#43e97b] p-0.5 mx-auto mb-3 shadow-lg shadow-[#6c63ff]/20">
            <div className="w-full h-full bg-[#111118] rounded-[14px] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#43e97b]" />
            </div>
          </div>
          <h1 className="font-syne text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-xs sm:text-sm text-[#888899] mt-1">
            Join Cyber Nova Computer Academy Portal
          </p>
        </div>

        {success && (
          <div className="mb-4 p-3 rounded-xl bg-[#00a651]/15 border border-[#00a651]/40 text-[#02fd88] text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-[#ff6584]/15 border border-[#ff6584]/40 text-[#ff6584] text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex justify-center mb-5">
          <div className="p-1 bg-[#1a1a26] rounded-xl border border-[#2a2a3a] inline-flex">
            <button
              type="button"
              onClick={() => setRole('student')}
              className="px-6 py-2 rounded-lg text-xs font-semibold bg-[#6c63ff] text-white shadow-md transition-all cursor-pointer">
              Student Account
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-[#888899] mb-1">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Muhammad Bilal Khan"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1a1a26] border border-[#2a2a3a] text-white text-sm focus:outline-none focus:border-[#6c63ff]"
              />
              <User className="w-4 h-4 text-[#888899] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#888899] mb-1">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1a1a26] border border-[#2a2a3a] text-white text-xs sm:text-sm focus:outline-none focus:border-[#6c63ff]"
                />
                <Mail className="w-4 h-4 text-[#888899] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#888899] mb-1">
                Phone / WhatsApp *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0319-8647809"
                  required
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1a1a26] border border-[#2a2a3a] text-white text-xs sm:text-sm focus:outline-none focus:border-[#6c63ff]"
                />
                <Phone className="w-4 h-4 text-[#888899] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#888899] mb-1">
                Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 chars"
                  required
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1a1a26] border border-[#2a2a3a] text-white text-xs sm:text-sm focus:outline-none focus:border-[#6c63ff]"
                />
                <Lock className="w-4 h-4 text-[#888899] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#888899] mb-1">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  required
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1a1a26] border border-[#2a2a3a] text-white text-xs sm:text-sm focus:outline-none focus:border-[#6c63ff]"
                />
                <Lock className="w-4 h-4 text-[#888899] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2 text-xs text-[#888899] cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded bg-[#1a1a26] border-[#2a2a3a] text-[#6c63ff]"
              />
              <span>
                I agree to the Cyber Nova Academy rules, batch timings, and credential verification policies.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#6c63ff] hover:bg-[#5b52e0] text-white font-bold text-sm transition-all shadow-xl shadow-[#6c63ff]/30 hover:shadow-[#6c63ff]/50 cursor-pointer flex items-center justify-center gap-2 mt-3 disabled:opacity-50"
          >
            <span>{loading ? 'Processing Registration...' : 'Complete Registration & Sign Up'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#888899]">
          Already registered?{' '}
          <Link href="/login" className="text-[#818cf8] font-semibold hover:underline">
            Log in to existing account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-[#888899]">Loading registration...</div>}>
        <SignUpContent />
      </Suspense>
      <Footer />
    </div>
  );
}