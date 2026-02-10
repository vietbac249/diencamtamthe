
import React, { useState } from 'react';
import { UserInputs, Gender, BirthHour } from '../types';

interface HeroProps {
  onSearch: (inputs: UserInputs) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [inputs, setInputs] = useState<UserInputs>({
    fullName: '',
    birthDate: '',
    birthHour: BirthHour.TY,
    gender: Gender.MALE
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputs.fullName && inputs.birthDate) {
      onSearch(inputs);
    } else {
      alert("Vui lòng điền đầy đủ thông tin.");
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-traditional text-yellow-500 mb-6 drop-shadow-lg">
            Diễn Cầm Tam Thế
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            Khám phá tiền thế, hiện thế và hậu thế qua bí thuật chiêm tinh cổ xưa <br className="hidden md:block" />
            được soi sáng bởi trí tuệ nhân tạo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Họ và Tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  value={inputs.fullName}
                  onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Giới tính</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setInputs({ ...inputs, gender: Gender.MALE })}
                    className={`flex-1 py-3 rounded-lg border transition-all ${inputs.gender === Gender.MALE ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-slate-900 border-slate-700 text-slate-400'}`}
                  >
                    Nam
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputs({ ...inputs, gender: Gender.FEMALE })}
                    className={`flex-1 py-3 rounded-lg border transition-all ${inputs.gender === Gender.FEMALE ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-slate-900 border-slate-700 text-slate-400'}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Ngày sinh (Dương lịch)</label>
                <input
                  type="date"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-slate-300"
                  value={inputs.birthDate}
                  onChange={(e) => setInputs({ ...inputs, birthDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Giờ sinh</label>
                <select
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-slate-300"
                  value={inputs.birthHour}
                  onChange={(e) => setInputs({ ...inputs, birthHour: e.target.value as BirthHour })}
                >
                  {Object.values(BirthHour).map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg"
            >
              Luận Giải Ngay
            </button>
          </form>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
};

export default Hero;
