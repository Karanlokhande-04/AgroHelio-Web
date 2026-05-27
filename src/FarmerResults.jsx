import React from 'react';
import { Download, Share2, Wallet, Zap, ShieldCheck, ArrowLeft, Leaf } from 'lucide-react';

export default function FarmerResults({ data, onBack }) {

  // Simple logic for the demo (This will come from Backend later)
  const savings = data.pumpHp * 1200 * 12; // Yearly savings
  const panels = Math.ceil(data.pumpHp * 1.5 * 1000 / 400);
  const cost = data.pumpHp * 45000;
  const subsidy = cost * 0.60; // 60% PM-KUSUM

  // WhatsApp Share Function
  const shareOnWhatsApp = () => {
    const message =
      `*AgroHelio Solar Report*%0A` +
      `--------------------------%0A` +
      `🌾 *Farm:* ${data.cropType} Farm%0A` +
      `⚡ *Solar Needed:* ${data.pumpHp * 1.5} kW%0A` +
      `💰 *Yearly Savings:* ₹${savings.toLocaleString()}%0A` +
      `🏛️ *Govt. Subsidy:* 60% (PM-KUSUM)%0A` +
      `--------------------------%0A` +
      `Generated via AgroHelio.vercel.app`;

    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-emerald-600 transition"
        >
          <ArrowLeft size={20} /> Re-Calculate
        </button>

        <div className="flex gap-3">

          {/* UPDATED WHATSAPP BUTTON */}
          <button
            onClick={shareOnWhatsApp}
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-[#128C7E] transition"
          >
            <Share2 size={16} /> Share on WhatsApp
          </button>

          <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition">
            <Download size={16} /> Download Report
          </button>

        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* BIG SAVINGS CARD */}
        <div className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-emerald-100 font-bold uppercase tracking-widest text-sm mb-2">
              Estimated Yearly Savings
            </p>

            <h2 className="text-7xl font-black mb-6">
              ₹{savings.toLocaleString()}
              <span className="text-2xl text-emerald-300">/year</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <p className="text-emerald-200 text-xs font-bold mb-1">
                  Solar Panels Needed
                </p>

                <p className="text-2xl font-black">{panels} Units</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <p className="text-emerald-200 text-xs font-bold mb-1">
                  System Capacity
                </p>

                <p className="text-2xl font-black">
                  {data.pumpHp * 1.5} kW
                </p>
              </div>
            </div>
          </div>

          <Zap
            size={200}
            className="absolute -right-10 -bottom-10 text-emerald-500/20 rotate-12"
          />
        </div>

        {/* SUBSIDY CARD */}
        <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-xl flex flex-col justify-between">

          <div>
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <ShieldCheck size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              PM-KUSUM Eligible
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              You are eligible for 60% government subsidy under Component B.
            </p>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span className="text-slate-400">Total Cost:</span>
              <span className="text-slate-800">
                ₹{cost.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-lg font-black">
              <span className="text-emerald-600">You Pay:</span>

              <span className="text-emerald-600">
                ₹{(cost - subsidy).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED BREAKDOWN */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-slate-50 rounded-[32px] p-8">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Leaf className="text-emerald-600" />
            Environmental Impact
          </h4>

          <div className="space-y-4">

            <div className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
              <span className="text-slate-500 font-medium">
                CO2 Offset
              </span>

              <span className="font-black text-slate-800 text-lg">
                4.2 Tons/yr
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
              <span className="text-slate-500 font-medium">
                Trees Equivalent
              </span>

              <span className="font-black text-slate-800 text-lg">
                184 Trees
              </span>
            </div>

          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">

          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Wallet className="text-blue-600" />
            Loan Availability
          </h4>

          <p className="text-slate-500 text-sm mb-6">
            Low-interest agricultural loans are available for the remaining 40% cost from NABARD & SBI.
          </p>

          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">
            Check Bank Offers
          </button>

        </div>
      </div>
    </div>
  );
}
