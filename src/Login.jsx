import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
        // Safe check using optional chaining (?.) prevents crashes if user_metadata is empty
        const userRole = data?.user?.user_metadata?.role || 'farmer';
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
        <h2 className="text-3xl font-black text-center text-slate-900 mb-8">Sign In</h2>
        
        <div className="space-y-4">
          {/* Added value property to ensure true state control */}
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            className="w-full p-4 bg-slate-50 border rounded-2xl text-black outline-none focus:ring-2 focus:ring-emerald-500" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            className="w-full p-4 bg-slate-50 border rounded-2xl text-black outline-none focus:ring-2 focus:ring-emerald-500" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black shadow-xl hover:bg-slate-800 transition disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Login'}
        </button>

        <p className="mt-6 text-center text-slate-400 text-sm font-medium">
          New to AgroHelio? <span onClick={onSwitch} className="text-emerald-600 cursor-pointer font-bold underline">Create Account</span>
        </p>
      </div>
    </div>
  );
}
