import React, { useState } from 'react';
import { Sprout, Briefcase, Sun, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import FarmerWizard from './FarmerWizard';
import AnalysisMap from './AnalysisMap'; // Import the new Map Engine

export default function App() {
  const [view, setView] = useState('home');

  if (view === 'farmer') return <FarmerWizard onBack={() => setView('home')} />;
  if (view === 'business') return <AnalysisMap />; // Switch to the Map view

  return (
    <div className="min-h-screen bg-[#F8FAF5]">
      {/* Header */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="bg-[#2D6A4F] p-2 rounded-xl shadow-lg shadow-emerald-200">
            <Sun className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold text-[#1B4332]">AgroHelio</span>
        </div>
        <button className="bg-white border px-6 py-2 rounded-full font-bold shadow-sm">Sign In</button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 text-center pt-20">
        <h1 className="text-6xl font-black text-slate-900 mb-6">
          Precision <span className="text-emerald-600">Solar Analysis.</span>
        </h1>
        <p className="text-xl text-slate-500 mb-16">Choose your workspace to begin.</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-20">
          {/* Farmer Card */}
          <div onClick={() => setView('farmer')} className="bg-white p-12 rounded-[48px] shadow-xl hover:ring-4 ring-emerald-500 transition-all cursor-pointer">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Sprout className="text-emerald-600" /></div>
            <h3 className="text-3xl font-bold mb-4">Farmer Portal</h3>
            <p className="text-slate-500 mb-8 font-medium">Simple ROI for irrigation & pumps.</p>
            <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold">Launch Guide</button>
          </div>

          {/* Business Card (The "HelioScope" Style) */}
          <div onClick={() => setView('business')} className="bg-slate-900 p-12 rounded-[48px] shadow-2xl hover:ring-4 ring-blue-500 transition-all cursor-pointer text-white">
            <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Briefcase className="text-blue-400" /></div>
            <h3 className="text-3xl font-bold mb-4">Business Suite</h3>
            <p className="text-slate-400 mb-8 font-medium">Technical site scouting & 8-factor scoring.</p>
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold">Open Site Engine</button>
          </div>
        </div>
      </main>
    </div>
  );
}
