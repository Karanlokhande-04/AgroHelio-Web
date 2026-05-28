import React, { useEffect } from 'react';
import { Sun, Zap, Thermometer, Cloud, ArrowLeft, Download, Layers } from 'lucide-react';

export default function AnalysisMap({ onBack }) {
  useEffect(() => {
    // This looks for the Map library we loaded in index.html
    const timer = setTimeout(() => {
      if (window.L && !window.mapInstance) {
        window.mapInstance = window.L.map('map-id', { zoomControl: false }).setView([19.0760, 72.8777], 13);
        
        // Google Satellite Hybrid Layer (Real World Professional Look)
        window.L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }).addTo(window.mapInstance);

        // Add a Marker
        window.L.marker([19.0760, 72.8777]).addTo(window.mapInstance)
          .bindPopup('<b>Target Site A</b><br>Solar Score: 87%').openPopup();

        // Add Geoman Drawing Tools
        if (window.mapInstance.pm) {
          window.mapInstance.pm.addControls({
            position: 'topright',
            drawCircleMarker: false,
            rotateMode: false,
          });
        }
      }
    }, 1000);

    return () => {
      if (window.mapInstance) {
        window.mapInstance.remove();
        window.mapInstance = null;
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex h-full bg-[#0B0F1A] text-white overflow-hidden">
      {/* SIDEBAR */}
      <div className="w-80 bg-[#111827] border-r border-slate-800 p-6 flex flex-col shadow-2xl z-10 overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency Score</span>
            <span className="text-2xl font-black text-emerald-400">87.4%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[87%] shadow-[0_0_15px_#10b981]"></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-amber-400 mb-1 uppercase text-[10px] font-black">
              <Sun size={14}/> Irradiance
            </div>
            <div className="text-xl font-bold">5.82 <span className="text-xs text-slate-500 font-medium">kWh/m²</span></div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-blue-400 mb-1 uppercase text-[10px] font-black">
              <Cloud size={14}/> Cloud Cover
            </div>
            <div className="text-xl font-bold">12.4 <span className="text-xs text-slate-500 font-medium">%</span></div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold text-xs uppercase">
             <Zap size={14} /> AI Engine
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Site detected with high PV potential. Minimal shading from surrounding structures. 
          </p>
        </div>

        <button className="w-full mt-auto bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold text-sm transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
          <Download size={18} /> Export Analysis
        </button>
      </div>

      {/* MAP AREA */}
      <div className="flex-1 relative">
        <div id="map-id" className="absolute inset-0 z-0 h-full w-full"></div>
        <div className="absolute top-6 left-6 z-[1000]">
           <div className="bg-[#111827]/80 backdrop-blur-md p-2 rounded-xl border border-slate-700 flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-[10px] font-black uppercase rounded-lg">Satellite</button>
              <button className="px-4 py-2 text-slate-400 text-[10px] font-black uppercase">Terrain</button>
           </div>
        </div>
      </div>
    </div>
  );
}
