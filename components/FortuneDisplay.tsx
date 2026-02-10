
import React from 'react';
import { FortuneResult, PaymentStatus } from '../types';

interface FortuneDisplayProps {
  result: FortuneResult;
  payment: PaymentStatus;
  aiInsights: string | null;
  onUnlock: () => void;
}

const FortuneDisplay: React.FC<FortuneDisplayProps> = ({ result, payment, aiInsights, onUnlock }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-slate-800/30 border border-slate-700 rounded-3xl p-8 mb-12 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <span className="block text-sm text-slate-400 uppercase tracking-widest mb-1">Thiên Can</span>
            <span className="text-3xl font-traditional text-yellow-500 font-bold">{result.can}</span>
          </div>
          <div className="text-center border-l border-slate-700 pl-8">
            <span className="block text-sm text-slate-400 uppercase tracking-widest mb-1">Địa Chi</span>
            <span className="text-3xl font-traditional text-yellow-500 font-bold">{result.chi}</span>
          </div>
          <div className="text-center border-l border-slate-700 pl-8">
            <span className="block text-sm text-slate-400 uppercase tracking-widest mb-1">Mệnh</span>
            <span className="text-3xl font-traditional text-yellow-500 font-bold">{result.element}</span>
          </div>
        </div>
        
        {aiInsights && (
          <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl text-left">
            <h3 className="text-yellow-500 font-bold mb-3 flex items-center">
              <span className="mr-2">✨</span> AI Luận Giải Chuyên Sâu
            </h3>
            <div className="text-slate-300 italic leading-relaxed whitespace-pre-line">
              {aiInsights}
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-8">
        {result.sections.map((section) => {
          const isLocked = section.isPremium && !payment.isPaid;
          
          return (
            <div key={section.id} className="relative bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-traditional text-yellow-500 mb-4 border-b border-slate-700 pb-2 flex items-center">
                  {section.title}
                  {section.isPremium && !payment.isPaid && (
                    <span className="ml-3 text-[10px] bg-yellow-500 text-slate-900 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Premium</span>
                  )}
                </h3>
                
                <div className={`text-slate-300 leading-relaxed text-lg transition-all duration-700 ${isLocked ? 'premium-blur' : ''}`}>
                  {section.content}
                </div>

                {isLocked && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 px-6 pt-16">
                    <div className="bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 text-center shadow-2xl max-w-sm">
                      <p className="text-slate-300 mb-6 font-medium">Mở khóa để xem nội dung chi tiết về {section.title.toLowerCase()} của bạn</p>
                      <button 
                        onClick={onUnlock}
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all"
                      >
                        Mở Khóa Report (99.000đ)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FortuneDisplay;
