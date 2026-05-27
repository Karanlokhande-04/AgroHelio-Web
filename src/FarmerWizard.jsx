import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Droplets, Zap, MapPin, CheckCircle } from 'lucide-react';

export default function FarmerWizard({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pumpHp: '5',
    cropType: 'Rice',
    hours: '6',
    state: 'Maharashtra'
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-[#F8FAF5] p-6">
      <div className="max-w-xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden border border-emerald-100">
        
        {/* Progress Bar */}
        <div className="bg-emerald-50 h-2 w-full">
          <div 
            className="bg-emerald-600 h-full transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <div className="p-8">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-emerald-700 mb-6 font-medium transition">
            <ArrowLeft size={18} /> Back to Home
          </button>

          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Your Water Pump</h2>
              <p className="text-slate-500">Tell us about the pump you use for irrigation.</p>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Pump Horsepower (HP)</label>
                <select 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.pumpHp}
                  onChange={(e) => setFormData({...formData, pumpHp: e.target.value})}
                >
                  <option value="3">3 HP</option>
                  <option value="5">5 HP</option>
                  <option value="7.5">7.5 HP</option>
                  <option value="10">10 HP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Daily Usage (Hours)</label>
                <input 
                  type="range" min="1" max="12" 
                  className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  value={formData.hours}
                  onChange={(e) => setFormData({...formData, hours: e.target.value})}
                />
                <div className="text-center mt-2 font-bold text-emerald-700">{formData.hours} Hours per day</div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-700">
                <Droplets size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Crop Details</h2>
              <p className="text-slate-500">Solar needs change based on what you grow.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Rice', 'Wheat', 'Cotton', 'Sugarcane'].map((crop) => (
                  <button 
                    key={crop}
                    onClick={() => setFormData({...formData, cropType: crop})}
                    className={`p-4 rounded-2xl border-2 transition-all font-bold ${formData.cropType === crop ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-100 bg-slate-50 text-slate-400'}`}
                  >
                    {crop}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center py-4">
              <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-200">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">All Set!</h2>
              <p className="text-slate-500">Ready to see how much you can save with solar power?</p>
              
              <div className="bg-slate-50 p-6 rounded-[24px] text-left space-y-3">
                <div className="flex justify-between text-sm"><span className="text-slate-400">Pump:</span> <span className="font-bold text-slate-700">{formData.pumpHp} HP</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Crop:</span> <span className="font-bold text-slate-700">{formData.cropType}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-400">Usage:</span> <span className="font-bold text-slate-700">{formData.hours} Hrs/Day</span></div>
              </div>
            </div>
          )}

          <div className="mt-10 flex gap-4">
            {step > 1 && (
              <button onClick={prevStep} className="flex-1 py-4 rounded-2xl font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
                Back
              </button>
            )}
            <button 
              onClick={step === 3 ? () => alert("Calculating for " + formData.pumpHp + "HP...") : nextStep}
              className="flex-3 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              {step === 3 ? 'Calculate My Savings' : 'Next Step'} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
