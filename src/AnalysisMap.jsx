import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Sun, Wind, Cloud, Thermometer, Info, Database } from 'lucide-react';

export default function AnalysisMap() {
  return (
    <div className="flex h-[calc(100vh-80px)] bg-[#0B0F1A] overflow-hidden">
      {/* LEFT SIDEBAR - The Technical Engine */}
      <div className="w-96 bg-[#111827] border-r border-slate-800 p-6 overflow-y-auto text-white">
        <div className="flex items-center gap-2 mb-8">
          <Database className="text-blue-400" size={20} />
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Site Analysis Engine</h2>
        </div>

        {/* 8-FACTOR SCORING (Like the Original Project) */}
        <div className="space-y-6">
          <section>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-slate-300">Overall Solar Score</span>
              <span className="text-sm font-bold text-emerald-400">87/100</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className="bg-emerald-500 h-full rounded-full w-[87%] shadow-[0_0_10px_#10b981]"></div>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Irradiance', icon: <Sun size={14}/>, val: '5.8 kWh', color: 'text-amber-400' },
              { label: 'Cloud Cover', icon: <Cloud size={14}/>, val: '12%', color: 'text-blue-400' },
              { label: 'Tilt Angle', icon: <Info size={14}/>, val: '15.2°', color: 'text-purple-400' },
              { label: 'Temperature', icon: <Thermometer size={14}/>, val: '28°C', color: 'text-red-400' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
                <div className={`flex items-center gap-2 ${item.color} mb-1`}>
                  {item.icon} <span className="text-[10px] uppercase font-bold tracking-tighter"> {item.label}</span>
                </div>
                <div className="text-lg font-bold">{item.val}</div>
              </div>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl">
            <h3 className="text-blue-400 text-sm font-bold mb-2 flex items-center gap-2">
              <Zap size={16} /> AI Summary
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Based on NASA POWER data, this site has high potential for a 12kW system. 
              The ROI is estimated at 4.2 years with PM Surya Ghar subsidies.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - The Interactive Map */}
      <div className="flex-1 relative">
        <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <Marker position={[19.0760, 72.8777]}>
            <Popup>Current Analysis Site</Popup>
          </Marker>
        </MapContainer>
        
        {/* Floating Controls */}
        <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-2">
          <button className="bg-white p-3 rounded-xl shadow-2xl text-slate-900 font-bold hover:bg-slate-50">🛰️ Satellite View</button>
          <button className="bg-blue-600 p-3 rounded-xl shadow-2xl text-white font-bold hover:bg-blue-700">📏 Draw Area</button>
        </div>
      </div>
    </div>
  );
}

// Simple Helper Icon
function Zap({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> }
