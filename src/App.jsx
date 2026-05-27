import React from 'react';
import { Sprout, Briefcase, Sun, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div style={{ minHeight: '100-vh', backgroundColor: '#F8FAF5', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <h2 style={{ color: '#2D6A4F', fontSize: '24px', fontWeight: 'bold' }}>AgroHelio</h2>
      </nav>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Solar Intelligence for Farmers</h1>
        <p style={{ color: '#666' }}>Save money on diesel and electricity today.</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #ddd', width: '300px' }}>
            <Sprout size={48} color="#2D6A4F" />
            <h3>I am a Farmer</h3>
            <button style={{ background: '#2D6A4F', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', width: '100%' }}>
              Start Now
            </button>
          </div>
          
          <div style={{ background: '#0D1B2A', padding: '30px', borderRadius: '20px', color: 'white', width: '300px' }}>
            <Briefcase size={48} color="#4A90E2" />
            <h3>I am a Business</h3>
            <button style={{ background: '#4A90E2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', width: '100%' }}>
              Open Suite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
