import React, { useState } from 'react';
import { Sun, Mail, Lock, ArrowRight, Shield } from 'lucide-react';

export default function Login({ onLogin }) {
  const [role, setRole] = useState('farmer');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
        <div className="p-10">
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg">
              <Sun className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-400 text-center text-sm font-medium mb-10">Secure access to AgroHelio Intelligence</p>

          {/* Role Toggle */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
            <button 
              onClick={() => setRole('farmer')} 
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${role === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
              Farmer
            </button>
            <button 
              onClick={() => setRole('business')} 
              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${role === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
              Business
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition" />
            </div>
          </div>

          <button 
            onClick={() => onLogin(role)}
            className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 transition flex items-center justify-center gap-2">
            Sign In <ArrowRight size={20} />
          </button>
        </div>
        <div className="bg-slate-50 p-4 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <Shield size={12} /> 256-bit SSL Encryption Active
        </div>
      </div>
    </div>
  );
}
