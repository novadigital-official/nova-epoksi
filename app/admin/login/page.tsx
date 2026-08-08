'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — ADMİN GİRİŞ SAYFASI (TEST CREDENTIALS)
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@novaepoksi.com');
  const [password, setPassword] = useState('nova2026');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Test oturumu için doğrulama ve yönlendirme
    if (email === 'admin@novaepoksi.com' && password === 'nova2026') {
      router.push('/admin/dashboard');
    } else {
      alert('Hatalı kullanıcı adı veya şifre!');
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white mx-auto shadow-md">
            N
          </div>
          <h1 className="text-2xl font-black text-white">Nova Epoksi Yönetici Girişi</h1>
          <p className="text-xs text-slate-400">Tek tıkla içerik ve teklif yönetim paneline erişin.</p>
        </div>

        {/* TEST GİRİŞ BİLGİSİ ROZETİ */}
        <div className="bg-blue-900/40 border border-blue-700/50 p-4 rounded-2xl text-xs space-y-1">
          <div className="font-extrabold text-blue-300">🔑 Test Giriş Bilgileri:</div>
          <div>E-Posta: <code className="bg-slate-900 px-2 py-0.5 rounded text-blue-200">admin@novaepoksi.com</code></div>
          <div>Şifre: <code className="bg-slate-900 px-2 py-0.5 rounded text-blue-200">nova2026</code></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">E-Posta Adresi</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            Yönetim Paneline Giriş Yap →
          </button>
        </form>

        <div className="text-center pt-2">
          <a href="/" className="text-xs text-slate-500 hover:text-slate-400 font-bold">
            ← Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </main>
  );
}
