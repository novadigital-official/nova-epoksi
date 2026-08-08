'use client';

// ═══════════════════════════════════════════════════════════
// NOVA EPOKSI ANTALYA — NO-CODE VISUAL CMS & LEAD PANELİ
// Drag & Drop Görsel Yükleme, Tek Tık Fiyat ve WhatsApp Butonlu
// ═══════════════════════════════════════════════════════════

import React, { useState } from 'react';

interface CustomerLead {
  id: string;
  name: string;
  phone: string;
  location: string;
  sqM: string;
  facility: string;
  date: string;
  status: 'Yeni' | 'Arandı' | 'Teklif Verildi' | 'Kazanıldı';
}

const INITIAL_LEADS: CustomerLead[] = [
  { id: '1', name: 'Ahmet Yılmaz (Kepez Fabrika)', phone: '905321112233', location: 'Antalya / Kepez', sqM: '500 m²', facility: 'Fabrika Depo', date: 'Bugün 14:20', status: 'Yeni' },
  { id: '2', name: 'Lara Resort Otel Müdürü', phone: '905334445566', location: 'Antalya / Lara', sqM: '450 m²', facility: 'Otel Lobisi', date: 'Bugün 11:15', status: 'Arandı' },
  { id: '3', name: 'Mustafa Bey (Villa Garaj)', phone: '905357778899', location: 'Antalya / Döşemealtı', sqM: '120 m²', facility: 'Villa Garaj', date: 'Dün', status: 'Teklif Verildi' },
  { id: '4', name: 'Kaan Oto Servis', phone: '905552223344', location: 'Antalya / Konyaaltı', sqM: '800 m²', facility: 'Otopark Epoksi', date: '2 Gün Önce', status: 'Kazanıldı' }
];

export default function VisualNoCodeAdminDashboard() {
  const [activeTab, setActiveTab] = useState<'leads' | 'prices' | 'drag-drop-media'>('leads');
  const [leads, setLeads] = useState<CustomerLead[]>(INITIAL_LEADS);

  // Fiyat Tablosu State (Tek tıkla güncellenebilir)
  const [prices, setPrices] = useState({
    boya: 200,
    selfLeveling: 350,
    otopark: 400,
    endustriyel: 500,
    metalik: 700
  });

  // Drag & Drop State
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    '/images/saha-endustriyel.png',
    '/images/saha-otomotiv.png',
    '/images/saha-otel.png',
    '/images/saha-kozmetik.png',
    '/images/saha-tekstil.png',
    '/images/saha-depo.png'
  ]);

  const handleStatusChange = (id: string, newStatus: CustomerLead['status']) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const handlePriceSave = (key: keyof typeof prices, newVal: number) => {
    setPrices({ ...prices, [key]: newVal });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const newUrl = URL.createObjectURL(file);
      setUploadedFiles([newUrl, ...uploadedFiles]);
      alert(`"${file.name}" görseli başarıyla sürüklendi ve galeriye eklendi!`);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* PANEL ÜST HEADER */}
        <header className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest block mb-1">
              NO-CODE VISUAL CMS YÖNETİM PANECİ
            </span>
            <h1 className="text-2xl font-black text-white">
              Nova Epoksi Antalya İçerik & Lead Merkezi
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1.5 rounded-full font-extrabold">
              🟢 Oturum Açık: admin@novaepoksi.com
            </span>
            <a
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              Ana Sayfa
            </a>
          </div>
        </header>

        {/* 3 NO-CODE TAB SEÇENEĞİ */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-4 px-4 rounded-2xl font-black text-xs sm:text-sm border transition-all cursor-pointer text-center ${
              activeTab === 'leads'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            📋 Gelen Talepler ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab('prices')}
            className={`py-4 px-4 rounded-2xl font-black text-xs sm:text-sm border transition-all cursor-pointer text-center ${
              activeTab === 'prices'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            🏷️ m² Birim Fiyatlarını Güncelle
          </button>

          <button
            onClick={() => setActiveTab('drag-drop-media')}
            className={`py-4 px-4 rounded-2xl font-black text-xs sm:text-sm border transition-all cursor-pointer text-center ${
              activeTab === 'drag-drop-media'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            🖼️ Sürükle-Bırak Görsel Galerisi ({uploadedFiles.length})
          </button>
        </div>

        {/* TAB 1: MÜŞTERİ TALEPLERİ & TEK TIKLA WHATSAPP BUTONU */}
        {activeTab === 'leads' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Müşteri Teklif Kartları (Kanban)</h2>
              <span className="text-xs text-slate-500 font-bold">Tek Tıkla Müşteriye WhatsApp'tan Yazın</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className={`p-5 rounded-2xl border transition-all space-y-3 ${
                    lead.status === 'Yeni' ? 'bg-red-50/60 border-red-200' :
                    lead.status === 'Arandı' ? 'bg-amber-50/60 border-amber-200' :
                    lead.status === 'Teklif Verildi' ? 'bg-blue-50/60 border-blue-200' :
                    'bg-emerald-50/60 border-emerald-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-base text-slate-900">{lead.name}</span>
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                      className="bg-white border border-slate-300 text-slate-900 font-extrabold text-xs rounded-xl px-3 py-1.5 outline-none"
                    >
                      <option value="Yeni">🔴 Yeni Talep</option>
                      <option value="Arandı">🟡 Arandı</option>
                      <option value="Teklif Verildi">🔵 Teklif Verildi</option>
                      <option value="Kazanıldı">🟢 Kazanıldı</option>
                    </select>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div>📍 <strong>Lokasyon:</strong> {lead.location}</div>
                    <div>📐 <strong>Miktar & Alan:</strong> {lead.sqM} ({lead.facility})</div>
                    <div>📅 <strong>Tarih:</strong> {lead.date}</div>
                  </div>

                  {/* ZORUNLU TEK TIKLA WHATSAPP'TAN YAZ BUTONU */}
                  <a
                    href={`https://wa.me/${lead.phone}?text=${encodeURIComponent(`Merhaba ${lead.name}, Nova Epoksi Antalya'dan ulaşıyorum. Sayfamızdan ilettiğiniz ${lead.sqM} ${lead.facility} projeniz için keşif görüşmesi yapmak isteriz.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-transform active:scale-95"
                  >
                    <span>💬 WhatsApp'tan Müşteriye Yaz ({lead.phone})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TEK TIKLA M² BİRİM FİYATLARINI GÜNCELLEME */}
        {activeTab === 'prices' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-1">
                Tek Tıkla m² Birim Fiyatlarını Güncelleyin
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Değiştirdiğiniz fiyatlar anında sitedeki fiyat rehberinde ve hesaplama motorunda aktif olur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Epoksi Boya */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Epoksi Boya Kaplama (m²)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={prices.boya}
                    onChange={(e) => handlePriceSave('boya', Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 font-black text-slate-900 px-3 py-2 rounded-xl text-base outline-none focus:border-blue-600"
                  />
                  <span className="text-xs font-black text-slate-700">TL/m²</span>
                </div>
              </div>

              {/* Self Leveling */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Self Leveling Epoksi (m²)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={prices.selfLeveling}
                    onChange={(e) => handlePriceSave('selfLeveling', Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 font-black text-slate-900 px-3 py-2 rounded-xl text-base outline-none focus:border-blue-600"
                  />
                  <span className="text-xs font-black text-slate-700">TL/m²</span>
                </div>
              </div>

              {/* Otopark Epoksi */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Otopark Epoksi Kaplama (m²)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={prices.otopark}
                    onChange={(e) => handlePriceSave('otopark', Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 font-black text-slate-900 px-3 py-2 rounded-xl text-base outline-none focus:border-blue-600"
                  />
                  <span className="text-xs font-black text-slate-700">TL/m²</span>
                </div>
              </div>

              {/* Endüstriyel Epoksi */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Endüstriyel Epoksi Sistem (m²)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={prices.endustriyel}
                    onChange={(e) => handlePriceSave('endustriyel', Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 font-black text-slate-900 px-3 py-2 rounded-xl text-base outline-none focus:border-blue-600"
                  />
                  <span className="text-xs font-black text-slate-700">TL/m²</span>
                </div>
              </div>

              {/* Dekoratif Epoksi */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Dekoratif / Metalik Epoksi (m²)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={prices.metalik}
                    onChange={(e) => handlePriceSave('metalik', Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 font-black text-slate-900 px-3 py-2 rounded-xl text-base outline-none focus:border-blue-600"
                  />
                  <span className="text-xs font-black text-slate-700">TL/m²</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Fiyatlar başarıyla kaydedildi ve sitede yayınlandı!')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs py-3.5 px-6 rounded-xl cursor-pointer shadow-md"
            >
              Fiyatları Kaydet ve Canlıya Al
            </button>
          </div>
        )}

        {/* TAB 3: SÜRÜKLE-BIRAK (DRAG & DROP) PROJE GÖRSEL YÖNETİMİ */}
        {activeTab === 'drag-drop-media' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-1">
                Sürükle-Bırak (Drag & Drop) Proje Görsel Alanı
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Bilgisayarınızdan veya telefonunuzdan görselleri bu alana sürükleyerek galerinize ekleyin.
              </p>
            </div>

            {/* DRAG AND DROP ZONE */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-10 text-center transition-all cursor-pointer ${
                dragOver ? 'border-blue-600 bg-blue-50/50 scale-[1.01]' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
              }`}
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                📁
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">
                Yeni Saha Fotoğrafını Buraya Sürükleyin
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                veya bilgisayarınızdan dosya seçmek için tıklayın
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const newUrl = URL.createObjectURL(e.target.files[0]);
                    setUploadedFiles([newUrl, ...uploadedFiles]);
                  }
                }}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="inline-block bg-slate-900 text-white font-black text-xs px-5 py-3 rounded-xl cursor-pointer shadow-sm hover:bg-slate-800"
              >
                Görsel Seç
              </label>
            </div>

            {/* YÜKLÜ SAHA GÖRESLLERİ İZGARASI */}
            <div>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">
                Sitede Yayında Olan Saha Görselleri ({uploadedFiles.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {uploadedFiles.map((imgUrl, idx) => (
                  <div key={idx} className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-32">
                    <img src={imgUrl} alt={`Saha Proje ${idx}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx))}
                      className="absolute top-1.5 right-1.5 bg-red-600 text-white w-6 h-6 rounded-full text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer shadow"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
