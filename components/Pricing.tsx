
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-traditional font-bold text-yellow-500 mb-4">Gói Hội Viên & Dịch Vụ</h2>
          <p className="text-slate-400">Chọn gói phù hợp để thấu hiểu vận mệnh bản thân</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:border-yellow-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold mb-2">Gói Cơ Bản</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-6">Miễn Phí</div>
            <ul className="space-y-4 text-slate-400 flex-grow">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Tính Can Chi - Ngũ Hành</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Luận giải tổng quan</li>
              <li className="text-slate-600 flex items-center"><span className="mr-2">×</span> Chi tiết Tiền - Hiện - Hậu thế</li>
              <li className="text-slate-600 flex items-center"><span className="mr-2">×</span> AI tư vấn chuyên sâu</li>
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition-all">Sử dụng ngay</button>
          </div>

          <div className="bg-yellow-500/10 border-2 border-yellow-500 p-8 rounded-3xl transform scale-105 shadow-2xl relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase">Khuyên dùng</div>
            <h3 className="text-xl font-bold mb-2">Premium Report</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-6">99.000đ <span className="text-sm text-slate-500 font-normal">/ lần tra</span></div>
            <ul className="space-y-4 text-slate-200 flex-grow">
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span> Mở khóa 100% nội dung</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span> Luận giải Tiền/Hiện/Hậu thế</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span> Chi tiết Công danh, Hôn nhân</li>
              <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span> Phân tích AI độc bản</li>
            </ul>
            <button className="mt-8 w-full py-4 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-400 transition-all shadow-lg">Mở Khóa Ngay</button>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:border-yellow-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold mb-2">Hội Viên V.I.P</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-6">499.000đ <span className="text-sm text-slate-500 font-normal">/ năm</span></div>
            <ul className="space-y-4 text-slate-400 flex-grow">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Tra cứu không giới hạn</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lưu trữ báo cáo trọn đời</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Ưu tiên AI cao cấp nhất</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Quà tặng phong thủy định kỳ</li>
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition-all">Đăng ký Membership</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
