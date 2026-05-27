import React, { useState } from 'react';
import { Sun, Sprout, Briefcase, LayoutDashboard, Map as MapIcon, FileText, Settings, LogOut, Bell, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import FarmerWizard from './FarmerWizard';
import AnalysisMap from './AnalysisMap';
import Login from './Login'; // Import the new Login page

export default function App() {
  const [view, setView] = useState('home'); // home, login, farmer, business

  // 1. SHOW LOGIN PAGE
  if (view === 'login') {
    return <Login onLogin={(role) => setView(role)} />;
  }

  // 2. SHOW LANDING PAGE
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#FDFDFD] text-slate-900">
        <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200">
              <Sun className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-emerald-900">AgroHelio</span>
          </div>
          <button onClick={() => setView('login')} className="bg-emerald-600 text-white px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-emerald-700 transition">Sign In</button>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-20 pb-20 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">Solar Power. <br/><span className="text-emerald-600">Simplified.</span></h1>
          <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto">Choose your workspace to begin precision site analysis.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div onClick={() => setView('login')} className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-xl hover:shadow-2xl transition cursor-pointer border-b-8 border-b-emerald-500">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 mx-auto"><Sprout size={32} /></div>
              <h2 className="text-3xl font-bold mb-4">Farmer Portal</h2>
              <button className="text-emerald-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center w-full gap-2">Enter Portal <ArrowRight size={18}/></button>
            </div>

            <div onClick={() => setView('login')} className="p-10 bg-slate-900 text-white rounded-[40px] shadow-xl hover:shadow-2xl transition cursor-pointer border-b-8 border-b-blue-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 mx-auto"><Briefcase size={32} /></div>
              <h2 className="text-3xl font-bold mb-4">Business Suite</h2>
              <button className="text-blue-400 font-bold uppercase tracking-wider text-sm flex items-center justify-center w-full gap-2">Enter Suite <ArrowRight size={18}/></button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 3. SHOW DASHBOARD (After Login)
  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
          <Sun className="text-emerald-600" size={24} />
          <span className="font-black text-xl text-slate-800">AgroHelio</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl font-bold text-sm bg-emerald-50 text-emerald-700"><LayoutDashboard size={20}/> Dashboard</div>
          <div className="flex items-center gap-3 p-3 rounded-xl font-bold text-sm text-slate-400 hover:bg-slate-50"><MapIcon size={20}/> Site Analysis</div>
          <div className="flex items-center gap-3 p-3 rounded-xl font-bold text-sm text-slate-400 hover:bg-slate-50"><FileText size={20}/> Reports</div>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <button onClick={() => setView('home')} className="flex items-center gap-3 text-slate-500 font-bold w-full p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8">
          <h2 className="font-bold text-slate-800 uppercase tracking-widest text-xs">
            {view === 'farmer' ? 'Farmer Workspace' : 'Business Intelligence'}
          </h2>
          <div className="flex items-center gap-4"><div className="bg-slate-100 p-2 rounded-full text-slate-500"><Bell size={18}/></div><div className="w-8 h-8 bg-emerald-600 rounded-full"></div></div>
        </header>
        <div className="flex-1 overflow-auto">
          {view === 'farmer' ? <FarmerWizard onBack={() => setView('home')} /> : <AnalysisMap onBack={() => setView('home')} />}
        </div>
      </main>
    </div>
  );
}
