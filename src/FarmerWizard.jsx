import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Droplets, Zap, CheckCircle } from 'lucide-react';
import FarmerResults from './FarmerResults';

export default function FarmerWizard({ onBack }) {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    pumpHp: '5',
    cropType: 'Rice',
    hours: '6'
  });

  if (showResults) {
    return <FarmerResults data={formData} onBack={() => setShowResults(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAF5] p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-emerald-100">
        <div className="p-10">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-emerald-700 mb-8 font-bold transition">
            <ArrowLeft size={18} /> Exit Portal
          </button>

          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-4">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Irrigation Pump <br/><span className="text-emerald-600">Capacity</span></h2>
              <div className="space-y-4 pt-4">
                <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em]">Select Pump Horsepower</label>
                <div className="grid grid-cols-2 gap-3">
                  {['3', '5', '7.5', '10'].map(hp => (
                    <button key={hp} onClick={() => setFormData({...formData, pumpHp: hp})} 
                    className={`py-4 rounded-2xl font-bold border-2 transition-all ${formData.pumpHp === hp ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 text-slate-400'}`}>
                      {hp} HP Pump
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4">
              <h2 className="text-4xl font-black text-slate-900">Your <span className="text-emerald-600">Crops</span></h2>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {['Rice', 'Sugarcane', 'Cotton', 'Wheat'].map(crop => (
                  <button key={crop} onClick={() => setFormData({...formData, cropType: crop})} 
                  className={`py-4 rounded-2xl font-bold border-2 transition-all ${formData.cropType === crop ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 text-slate-400'}`}>
                    {crop}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center py-6 animate-in zoom-in-95">
              <div className="bg-emerald-600 w-24 h-24 rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-emerald-200">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-4xl font-black text-slate-900">Ready to Analyze</h2>
              <p className="text-slate-500 font-medium italic">"Solar power will help you save on diesel costs for your {formData.cropType} farm."</p>
            </div>
          )}

          <div className="mt-12 flex gap-4">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 py-5 rounded-2xl font-bold text-slate-400 border border-slate-100 hover:bg-slate-50">Back</button>
            )}
            <button 
              onClick={step === 3 ? () => setShowResults(true) : () => setStep(step + 1)}
              className="flex-[2] bg-emerald-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              {step === 3 ? 'Generate Report' : 'Next Step'} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
