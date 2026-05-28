import React, { useEffect } from 'react';
import { Sun, Zap, Info, Thermometer, Cloud } from 'lucide-react';

export default function AnalysisMap() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.L && !window.mapInstance) {
        window.mapInstance = window.L.map('map-id').setView([19.07, 72.87], 13);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(window.mapInstance);
      }
    }, 1000);
    return () => { 
        if(window.mapInstance) { window.mapInstance.remove(); window.mapInstance = null; }
        clearTimeout(timer); 
    };
  }, []);

  return (
    <div className="flex h-full bg-white relative overflow-hidden">
      <div className="w-80 border-r p-6 overflow-y-auto z-10 bg-white">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Technical Engine</h3>
        <div className="bg-slate-900 rounded-3xl p-6 text-white mb-6">
          <p className="text-xs text-slate-400 uppercase font-bold mb-1">Solar Score</p>
          <h4 className="text-4xl font-black">87.4<span className="text-blue-400 text-lg">/100</span></h4>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-gray-600"><Sun size={16} /> Irradiance</div>
            <span className="font-black text-slate-800">5.8</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-gray-600"><Thermometer size={16} /> Temp</div>
            <span className="font-black text-slate-800">28°C</span>
          </div>
        </div>
        <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg">Generate Report</button>
      </div>
      <div id="map-id" className="flex-1 bg-gray-200 z-0"></div>
    </div>
  );
}
