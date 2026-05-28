import React, { useState } from 'react';
import { Sun, Sprout, Briefcase, LayoutDashboard, Map as MapIcon, FileText, Settings, LogOut, Bell, ArrowRight } from 'lucide-react';
import FarmerWizard from './FarmerWizard';
import AnalysisMap from './AnalysisMap';
import Login from './Login';
import Register from './Register';

export default function App() {
  const [view, setView] = useState('home'); // home, login, register, farmer, business

  // VIEW LOGIC
  if (view === 'login') return <Login onLogin={(role) => setView(role)} onSwitch={() => setView('register')} />;
  if (view === 'register') return <Register onRegisterSuccess={(role) => setView(role)} onSwitch={() => setView('login')} />;

  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#FDFDFD]">
        <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2"><Sun className="text-emerald-600" /><span className="text-2xl font-black">AgroHelio</span></div>
          <button onClick={() => setView('login')} className="bg-emerald-600 text-white px-8 py-2.5 rounded-full font-bold shadow-md">Sign In</button>
        </nav>
        <main className="max-w-6xl mx-auto px-6 pt-20 text-center">
          <h1 className="text-6xl font-black mb-6">Solar Power. <span className="text-emerald-600">Simplified.</span></h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <div onClick={() => setView('login')} className="p-10 bg-white border rounded-[40px] shadow-xl cursor-pointer hover:scale-105 transition border-b-8 border-b-emerald-500">
              <Sprout size={48} className="text-emerald-600 mb-4 mx-auto" />
              <h2 className="text-2xl font-bold">Farmer Portal</h2>
            </div>
            <div onClick={() => setView('login')} className="p-10 bg-slate-900 text-white rounded-[40px] shadow-xl cursor-pointer hover:scale-105 transition border-b-8 border-b-blue-500">
              <Briefcase size={48} className="text-blue-400 mb-4 mx-auto" />
              <h2 className="text-2xl font-bold">Business Suite</h2>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-6 font-black text-xl flex items-center gap-2"><Sun className="text-emerald-600" /> AgroHelio</div>
        <nav className="flex-1 p-4 space-y-2 font-bold text-sm text-gray-400">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 text-emerald-700 cursor-pointer"><LayoutDashboard size={18}/> Dashboard</div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer"><MapIcon size={18}/> Site Analysis</div>
        </nav>
        <button onClick={() => setView('home')} className="m-4 p-3 font-bold text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2 transition">
          <LogOut size={18} /> Logout
        </button>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        <header className="h-16 border-b flex items-center justify-between px-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{view} Workspace</span>
          <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
        </header>
        <div className="flex-1 overflow-auto bg-gray-50">
          {view === 'farmer' ? <FarmerWizard onBack={() => setView('home')} /> : <AnalysisMap onBack={() => setView('home')} />}
        </div>
      </main>
    </div>
  );
}
