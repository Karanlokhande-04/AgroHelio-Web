import React, { useState } from 'react';
import { supabase } from './supabaseClient';

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
        <h2 className="text-3xl font-black text-center text-slate-900 mb-8">Create Account</h2>
        
        {/* Role Selection Switches */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6">
          <button 
            type="button"
            onClick={() => setRole('farmer')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition ${role === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
          >
            Farmer
          </button>
          <button 
            type="button"
            onClick={() => setRole('business')} 
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition ${role === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
          >
            Business
          </button>
        </div>

        <div className="space-y-4">
          {/* Linked value variables ensure React holds the inputs perfectly */}
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            className="w-full p-4 bg-slate-50 border rounded-2xl outline-none text-black focus:ring-2 focus:ring-emerald-500 transition" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            className="w-full p-4 bg-slate-50 border rounded-2xl outline-none text-black focus:ring-2 focus:ring-emerald-500 transition" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button 
          onClick={handleRegister}
          disabled={loading}
          className="w-full mt-8 bg-emerald-600 text-white py-5 rounded-2xl font-black shadow-xl hover:bg-emerald-700 transition disabled:bg-slate-300 disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <p className="mt-6 text-center text-slate-400 text-sm">
          Have an account? <span onClick={onSwitch} className="text-emerald-600 cursor-pointer font-bold underline">Sign In</span>
        </p>
      </div>
    </div>
  );
}
