import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { Sun, Shield, Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('farmer'); // Tracks user context choice

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });

      if (error) {
        alert(error.message);
      } else {
        // Look at metadata first; if empty, use the role button they clicked!
        const userRole = data?.user?.user_metadata?.role || selectedRole;
        onLogin(userRole);
      }
    } catch (err) {
      alert("An unexpected application error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
        
        {/* Top Branding Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg">
            <Sun className="text-white" size={32} />
          </div>
        </div>

        <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-center text-sm font-medium mb-8">
          Secure access to AgroHelio Intelligence
        </p>
        
        {/* Beautiful Role Selection Switcher matches your design */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
          <button 
            type="button"
            onClick={() => setSelectedRole('farmer')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${selectedRole === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Farmer
          </button>
          <button 
            type="button"
            onClick={() => setSelectedRole('business')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition ${selectedRole === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Business
          </button>
        </div>

        {/* Input Fields Container */}
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-slate-300" size={20} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-black outline-none focus:ring-2 focus:ring-emerald-500 transition" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-slate-300" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-black outline-none focus:ring-2 focus:ring-emerald-500 transition" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>

        {/* Sign In Trigger Button */}
        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Sign In'} <ArrowRight size={20} />
        </button>

        <p className="mt-8 text-center text-slate-400 text-xs font-bold">
          New to AgroHelio? <span onClick={onSwitch} className="text-emerald-600 cursor-pointer hover:underline">Create Account</span>
        </p>

        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <Shield size={12} /> 256-bit SSL Encryption Active
        </div>

      </div>
    </div>
  );
}
