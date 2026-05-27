import React, { useState } from 'react';
import { Sprout, Briefcase, Sun, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import FarmerWizard from './FarmerWizard'; // Import the new wizard

export default function App() {
  const [view, setView] = useState('home'); // This controls which page is shown

  // If view is 'farmer', show the Wizard instead of the landing page
  if (view === 'farmer') {
    return <FarmerWizard onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2" onClick={() => setView('home')} style={{cursor: 'pointer'}}>
          <div className="bg-[#2D6A4F] p-2 rounded-xl shadow-lg shadow-emerald-200">
            <Sun className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#1B4332]">AgroHelio</span>
        </div>
        <button className="bg-white border border-slate-200 px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
          Sign In
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-6">
            <Zap size={14} className="text-emerald-600 fill-emerald-600" />
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">India's #1 Solar Advisor</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-[800] text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Solar Power. <br />
            <span className="text-emerald-600">Simplified for Everyone.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Choose your profile to get started with precision solar site analysis, 
            ROI calculations, and government subsidy guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* FARMER CARD - Added onClick here */}
          <div 
            onClick={() => setView('farmer')}
            className="group relative bg-white border border-slate-100 p-10 rounded-[48px] shadow-xl shadow-emerald-900/5 hover:border-emerald-500 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Sprout className="text-emerald-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">For Farmers</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Cut your diesel costs. Get a simple plan for your solar water pump and irrigation systems.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-500" /> PM-KUSUM Subsidy Checker
              </div>
              <div className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 size={20} className="text-emerald-500" /> Multi-Language Support
              </div>
            </div>
            <button className="w-full bg-[#2D6A4F] text-white py-5 rounded-2xl text-xl font-bold shadow-lg shadow-emerald-200 hover:bg-[#1B4332] transition-all flex items-center justify-center gap-2 group-hover:gap-4">
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          {/* BUSINESS CARD */}
          <div className="group relative bg-[#0D1B2A] p-10 rounded-[48px] shadow-2xl shadow-blue-900/20 hover:ring-2 hover:ring-blue-400 transition-all duration-500 cursor-pointer text-white">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Briefcase className="text-blue-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">For Businesses</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Professional site scoring, technical heatmaps, and project management for EPC companies.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 font-medium text-slate-300">
                <ShieldCheck size={20} className="text-blue-400" /> 8-Factor Scoring Engine
              </div>
              <div className="flex items-center gap-3 font-medium text-slate-300">
                <ShieldCheck size={20} className="text-blue-400" /> Professional PDF Reports
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group-hover:gap-4">
              Enterprise Login <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </main>

      <footer className="text-center py-12 border-t border-slate-100 mt-20">
        <p className="text-slate-400 text-sm font-medium">© 2024 AgroHelio Intelligence. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
