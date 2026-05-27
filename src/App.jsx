import React, { useState } from 'react';
import { Sun, Sprout, Briefcase, LayoutDashboard, Map as MapIcon, FileText, Settings, LogOut, Bell } from 'lucide-react';
import FarmerWizard from './FarmerWizard';
import AnalysisMap from './AnalysisMap';

export default function App() {
  const [view, setView] = useState('home'); // home, farmer, business

  // 1. LANDING PAGE VIEW
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
        <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200">
              <Sun className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-emerald-900">AgroHelio</span>
          </div>
          <div className="flex gap-4">
            <button className="text-slate-600 font-semibold px-4 py-2 hover:text-emerald-600 transition">Login</button>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-emerald-700 transition">Register</button>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-20 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight text-slate-900">
              One Platform. <br/>
              <span className="text-emerald-600">Dual Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Choose your specialized workspace to begin precision solar analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FARMER ENTRY */}
            <div onClick={() => setView('farmer')} className="group p-10 bg-white border border-slate-100 rounded-[40px] shadow-xl hover:shadow-2xl transition-all cursor-pointer border-b-8 border-b-emerald-500">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition">
                <Sprout size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">I am a Farmer</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">Simple tools to calculate solar pump savings and government subsidies for your land.</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm">
                Enter Farmer Portal →
              </div>
            </div>

            {/* BUSINESS ENTRY */}
            <div onClick={() => setView('business')} className="group p-10 bg-slate-900 border border-slate-800 rounded-[40px] shadow-xl hover:shadow-2xl transition-all cursor-pointer border-b-8 border-b-blue-500 text-white">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition">
                <Briefcase size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">I am a Solar Business</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">Professional site scouting, 8-factor scoring engine, and bulk ROI reports for EPCs.</p>
              <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-sm">
                Enter Business Suite →
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 2. DASHBOARD WRAPPER (For both Farmer & Business)
  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
          <Sun className="text-emerald-600" size={24} />
          <span className="font-black text-xl text-slate-800">AgroHelio</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<MapIcon size={20}/>} label="Site Analysis" />
          <NavItem icon={<FileText size={20}/>} label="Reports" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button onClick={() => setView('home')} className="flex items-center gap-3 text-slate-500 font-bold w-full p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white z-10">
          <h2 className="font-bold text-slate-800 uppercase tracking-widest text-xs">
            {view === 'farmer' ? 'Farmer Workspace' : 'Business Intelligence Suite'}
          </h2>
          <div className="flex items-center gap-4">
             <div className="bg-slate-100 p-2 rounded-full text-slate-500"><Bell size={18}/></div>
             <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {view === 'farmer' ? <FarmerWizard /> : <AnalysisMap />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl font-bold text-sm cursor-pointer transition-all ${active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}>
      {icon} {label}
    </div>
  );
}
