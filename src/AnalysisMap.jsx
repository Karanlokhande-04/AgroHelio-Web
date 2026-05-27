import React, { useEffect, useState } from 'react';
import {
  Sun,
  Wind,
  Thermometer,
  Cloud,
  Zap,
  Download,
  Layers,
  Crosshair
} from 'lucide-react';

export default function AnalysisMap() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.L) {

        setLoading(false);

        // Initialize Map
        const map = window.L
          .map('map-viewport', { zoomControl: false })
          .setView([19.0760, 72.8777], 14);

        // Use Satellite Layer as Default
        window.L.tileLayer(
          'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
          {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
          }
        ).addTo(map);

        // Custom Marker
        const icon = window.L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div style="
              background-color:#10b981;
              width:12px;
              height:12px;
              border-radius:50%;
              border:2px solid white;
              box-shadow:0 0 10px rgba(0,0,0,0.3)
            "></div>
          `,
          iconSize: [12, 12]
        });

        window.L.marker([19.0760, 72.8777], { icon }).addTo(map);

        // ==================================
        // ADD DRAWING TOOLS (GEOMAN)
        // ==================================
        map.pm.addControls({
          position: 'topright',
          drawMarker: false,
          drawPolyline: false,
          drawRectangle: true,
          drawPolygon: true,
          drawCircle: false,
          cutPolygon: false,
          editMode: true,
          dragMode: true,
        });

        // Detect Drawn Area
        map.on('pm:create', (e) => {
          const layer = e.layer;

          const area = window.L.GeometryUtil.geodesicArea(
            layer.getLatLngs()[0]
          );

          alert(
            "Area selected: " +
            (area / 4047).toFixed(2) +
            " Acres"
          );
        });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full bg-white relative">

      {/* 1. TECHNICAL SIDEBAR */}
      <div className="w-[380px] border-r border-slate-100 flex flex-col bg-white shadow-2xl z-20 overflow-y-auto">
        <div className="p-6 space-y-8">

          {/* Site Overview */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Site Intelligence
            </h3>

            <div className="bg-slate-900 rounded-[24px] p-6 text-white shadow-xl shadow-blue-900/10">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase mb-1">
                    Overall Score
                  </p>

                  <h4 className="text-4xl font-black">
                    87.4
                    <span className="text-blue-400 text-lg">/100</span>
                  </h4>
                </div>

                <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  High Yield
                </div>
              </div>

              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full w-[87%]" />
              </div>
            </div>
          </div>

          {/* 8-Factor Engine */}
          <div className="grid grid-cols-2 gap-4">
            <FactorCard
              icon={<Sun size={14} />}
              name="Irradiance"
              value="5.8"
              unit="kWh"
              color="amber"
            />

            <FactorCard
              icon={<Wind size={14} />}
              name="Wind Speed"
              value="12"
              unit="kmh"
              color="blue"
            />

            <FactorCard
              icon={<Thermometer size={14} />}
              name="Temp"
              value="28"
              unit="°C"
              color="red"
            />

            <FactorCard
              icon={<Cloud size={14} />}
              name="Albedo"
              value="0.2"
              unit="%"
              color="slate"
            />
          </div>

          {/* ROI Calculator */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6">

            <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4">
              <Zap size={14} /> Financial Forecast
            </div>

            <div className="space-y-3">

              <div className="flex justify-between text-sm">
                <span className="text-emerald-600/70 font-medium">
                  Payback Period
                </span>

                <span className="font-black text-emerald-900">
                  4.2 Years
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-emerald-600/70 font-medium">
                  Est. Monthly Savings
                </span>

                <span className="font-black text-emerald-900">
                  ₹84,200
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-emerald-600/70 font-medium">
                  Net Subsidy (CFA)
                </span>

                <span className="font-black text-emerald-900">
                  ₹1,25,000
                </span>
              </div>

            </div>
          </div>

          <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg">
            <Download size={18} /> Generate Detailed PDF
          </button>

        </div>
      </div>

      {/* 2. INTERACTIVE MAP */}
      <div className="flex-1 bg-slate-100 relative">

        <div
          id="map-viewport"
          className="absolute inset-0 z-0"
        />

        {/* Map UI Overlays */}
        <div className="absolute top-6 left-6 z-10 flex gap-2">

          <MapTool
            icon={<Layers size={18} />}
            label="Satellite"
            active
          />

          <MapTool
            icon={<Crosshair size={18} />}
            label="Analyze Site"
          />

        </div>

        {loading && (
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm z-50 flex items-center justify-center">

            <div className="bg-white px-6 py-3 rounded-full shadow-2xl font-bold animate-pulse text-slate-800">
              Booting Analysis Engine...
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

function FactorCard({ icon, name, value, unit, color }) {

  const colors = {
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    slate: 'bg-slate-50 text-slate-600 border-slate-100'
  };

  return (
    <div className={`p-4 rounded-2xl border ${colors[color]}`}>

      <div className="flex items-center gap-2 mb-1 opacity-70">
        {icon}

        <span className="text-[10px] font-black uppercase tracking-widest">
          {name}
        </span>
      </div>

      <div className="text-lg font-black text-slate-900">
        {value}

        <span className="text-[10px] ml-0.5 opacity-50 uppercase">
          {unit}
        </span>
      </div>

    </div>
  );
}

function MapTool({ icon, label, active = false }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs shadow-xl transition ${
        active
          ? 'bg-white text-blue-600'
          : 'bg-slate-900 text-white hover:bg-slate-800'
      }`}
    >
      {icon} {label}
    </button>
  );
}
