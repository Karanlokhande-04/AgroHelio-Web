import React, { useEffect } from 'react';
import { Sun, Cloud, Thermometer, Info, Database, Zap, ArrowLeft } from 'lucide-react';

export default function AnalysisMap({ onBack }) {
  // This part initializes the map manually to prevent build errors
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.L) {
        const map = window.L.map('map-container').setView([19.0760, 72.8777], 13);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);
        window.L.marker([19.0760, 72.8777]).addTo(map).bindPopup('Target Site A').openPopup();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#0B0F1A] text-white">
      {/* Header Bar */}
      <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#111827]">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition">
            <ArrowLeft size={20} />
          </button>
          <h2 className="font-bold text-blue-400 tracking-tight text-lg">Site Analysis Engine v1.0</h2>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20">Export PDF</button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Technical Sidebar */}
        <div className="w-80 bg-[#111827] border-r border-slate-800 p-6 overflow-y-auto">
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency Score</span>
              <span className="text-2xl font-black text-emerald-400">87%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[87%] shadow-[0_0_15px_#10b981]"></div>
            </div>
          </div>

          <div className="space-y-4">
            <DataCard icon={<Sun size={16}/>} label="GHI Irradiance" value="5.82" unit="kWh/m²" color="text-amber-400" />
            <DataCard icon={<Cloud size={16}/>} label="Cloud Opacity" value="14.2" unit="%" color="text-blue-400" />
            <DataCard icon={<Thermometer size={16}/>} label="Ambient Temp" value="29.4" unit="°C" color="text-red-400" />
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold text-sm">
               <Zap size={14} /> AI Recommendation
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Site conditions are optimal. Low shading detected. Tilt angle of 18° recommended for maximum yield.
            </p>
          </div>
        </div>

        {/* Map View Port */}
        <div className="flex-1 relative bg-slate-900">
           <div id="map-container" className="absolute inset-0 z-0"></div>
           
           {/* Map Overlays */}
           <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <div className="bg-[#111827]/80 backdrop-blur-md p-1 rounded-xl border border-slate-700">
                <button className="px-4 py-2 text-xs font-bold text-white hover:bg-slate-700 rounded-lg">Satellite</button>
                <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:bg-slate-700 rounded-lg">Terrain</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function DataCard({ icon, label, value, unit, color }) {
  return (
    <div className="bg-[#1F2937]/50 border border-slate-800 p-4 rounded-xl">
      <div className={`flex items-center gap-2 ${color} mb-1 opacity-80 uppercase text-[10px] font-black tracking-widest`}>
        {icon} {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold">{value}</span>
        <span className="text-[10px] text-slate-500 font-bold">{unit}</span>
      </div>
    </div>
  );
}
