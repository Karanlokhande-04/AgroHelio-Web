import React, { useState } from 'react';
import { Sun, Mail, Lock, User, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Register({ onSwitch, onRegisterSuccess }) {
  const [role, setRole] = useState('farmer');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-10">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg">
              <Sun className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Join AgroHelio</h2>
          <p className="text-slate-400 text-center text-sm font-medium mb-8">Start your solar journey today</p>

          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6">
            <button onClick={() => setRole('farmer')} className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${role === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>Farmer</button>
            <button onClick={() => setRole('business')} className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${role === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>Business</button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="text" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-300" size={20} />
              <input type="password" placeholder="Create Password" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>

          <button onClick={() => onRegisterSuccess(role)} className="w-full mt-8 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-emerald-700 transition flex items-center justify-center gap-2">
            Create Account <ArrowRight size={20} />
          </button>

          <p className="mt-8 text-center text-slate-400 text-xs font-bold">
            Already have an account? <span onClick={onSwitch} className="text-emerald-600 cursor-pointer hover:underline">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}
