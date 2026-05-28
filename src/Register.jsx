import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { Sun, Shield, Mail, Lock, ArrowRight } from 'lucide-react';

export default function Register({ onSwitch, onRegisterSuccess }) {
  const [role, setRole] = useState('farmer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Please enter both an email address and a password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      // Create the user in Supabase Auth Engine
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { role: role } // Metadata saves perfectly here!
        }
      });

      if (error) {
        alert(error.message);
      } else {
        alert("Registration Successful! Welcome to AgroHelio.");
        onRegisterSuccess(role, data.user);
      }
    } catch (err) {
      alert("An unexpected registration failure occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
        
        {/* Top Branding Section matching your design style */}
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg">
            <Sun className="text-white" size={32} />
          </div>
        </div>

        <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Create Account</h2>
        <p className="text-slate-400 text-center text-sm font-medium mb-8">
          Join AgroHelio Intelligence Platform
        </p>
        
        {/* Role Selection Switches */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
          <button 
            type="button"
            onClick={() => setRole('farmer')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition ${role === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Farmer
          </button>
          <button 
            type="button"
            onClick={() => setRole('business')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition ${role === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Business
          </button>
        </div>

        {/* Inputs with Integrated Visual Icons */}
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-slate-300" size={20} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-black focus:ring-2 focus:ring-emerald-500 transition" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-slate-300" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-black focus:ring-2 focus:ring-emerald-500 transition" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleRegister}
          disabled={loading}
          className="w-full mt-8 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-emerald-700 transition flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Sign Up'} <ArrowRight size={20} />
        </button>

        <p className="mt-8 text-center text-slate-400 text-xs font-bold">
          Have an account? <span onClick={onSwitch} className="text-emerald-600 cursor-pointer hover:underline">Sign In</span>
        </p>

        {/* Secure Bottom Seal */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <Shield size={12} /> 256-bit SSL Encryption Active
        </div>

      </div>
    </div>
  );
}
