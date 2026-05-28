import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Sun, Zap, Cloud, Download } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet marker icon configurations in Next.js/Vercel environments
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function AnalysisMap({ onBack }) {
  // Center coordinates (Currently set to Mumbai coordinates from your sample code)
  const position = [19.0760, 72.8777];

  return (
    <div className="flex h-full bg-[#0B0F1A] text-white overflow-hidden w-full absolute inset-0">
      
      {/* SIDEBAR */}
      <div className="w-80 bg-[#111827] border-r border-slate-800 p-6 flex flex-col shadow-2xl z-[1000] overflow-y-auto">
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
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Site detected with high PV potential. Minimal shading from surrounding structures. 
          </p>
        </div>

        <button className="w-full mt-auto bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold text-sm transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
          <Download size={18} /> Export Analysis
        </button>
      </div>

      {/* MAP AREA */}
      <div className="flex-1 relative h-full w-full">
        <MapContainer 
          center={position} 
          zoom={13} 
          zoomControl={false}
          className="h-full w-full z-0"
        >
          {/* Google Satellite Hybrid Map Layer */}
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            attribution="&copy; Google Maps"
          />

          <Marker position={position}>
            <Popup>
              <div className="text-slate-900">
                <b className="font-bold text-sm">Target Site A</b><br />
                <span className="text-xs text-emerald-600 font-semibold">Solar Score: 87%</span>
              </div>
            </Popup>
          </Marker>

          <ZoomControl position="bottomright" />
        </MapContainer>

        {/* Map Type Controls overlay */}
        <div className="absolute top-6 left-6 z-[1000]">
           <div className="bg-[#111827]/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 flex gap-1 shadow-xl">
              <button className="px-4 py-2 bg-blue-600 text-[10px] font-black uppercase rounded-lg tracking-wider text-white">Satellite</button>
              <button className="px-4 py-2 text-slate-400 text-[10px] font-black uppercase tracking-wider hover:text-white transition">Terrain</button>
           </div>
        </div>
      </div>

    </div>
  );
}
