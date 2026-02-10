
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FortuneDisplay from './components/FortuneDisplay';
import Pricing from './components/Pricing';
import { UserInputs, FortuneResult, PaymentStatus } from './types';
import { calculateCanChi, generateBaseFortune } from './services/lunar';
import { getAIPersonalization } from './services/gemini';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<UserInputs | null>(null);
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [payment, setPayment] = useState<PaymentStatus>({ isPaid: false });
  const [aiInsights, setAiInsights] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (userInputs: UserInputs) => {
    setIsLoading(true);
    setInputs(userInputs);
    
    // Calculate basics
    const birthYear = new Date(userInputs.birthDate).getFullYear();
    const { can, chi, element } = calculateCanChi(birthYear);
    
    // Get base fortune data
    const sections = generateBaseFortune(can, chi, userInputs.birthHour);
    
    setResult({
      can,
      chi,
      element,
      sections
    });

    // Get AI personalization if API key exists
    if (process.env.API_KEY) {
      const insight = await getAIPersonalization(userInputs, can, chi, element);
      setAiInsights(insight);
    }

    setIsLoading(false);
    // Smooth scroll to results
    setTimeout(() => {
        window.scrollTo({ top: 800, behavior: 'smooth' });
    }, 100);
  };

  const handleUnlock = () => {
    // Mock payment flow
    const confirmPayment = window.confirm("Hệ thống sẽ chuyển hướng đến cổng thanh toán (Momo/ZaloPay). Bạn đồng ý mở khóa bản đầy đủ với 99.000đ?");
    if (confirmPayment) {
      setIsLoading(true);
      setTimeout(() => {
        setPayment({ isPaid: true, orderId: 'TRX-' + Math.random().toString(36).substr(2, 9).toUpperCase() });
        setIsLoading(false);
        alert("Thanh toán thành công! Chúc mừng bạn đã mở khóa vận mệnh trọn đời.");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen mystic-gradient overflow-x-hidden">
      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-slate-900">TC</div>
            <span className="text-xl font-traditional font-bold tracking-tight text-yellow-500 hidden sm:inline">TAM THẾ AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-yellow-500 transition-colors">Trang chủ</a>
            <a href="#pricing" className="hover:text-yellow-500 transition-colors">Bảng giá</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Tài liệu SEO</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero onSearch={handleSearch} />

        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-yellow-500 font-traditional text-xl animate-pulse">Đang soi sáng vận mệnh...</p>
            </div>
          </div>
        )}

        {result && (
          <div id="results">
            <FortuneDisplay 
                result={result} 
                payment={payment} 
                aiInsights={aiInsights} 
                onUnlock={handleUnlock}
            />
          </div>
        )}

        <Pricing />

        {/* SEO Section Mockup */}
        <section className="py-24 border-t border-slate-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-invert lg:prose-xl mx-auto">
              <h2 className="text-3xl font-traditional text-yellow-500 mb-8">Diễn Cầm Tam Thế là gì? Ý nghĩa trong đời sống người Việt</h2>
              <p className="text-slate-400 mb-6">
                Diễn Cầm Tam Thế là một cuốn sách cổ quan trọng trong hệ thống bói toán truyền thống của Việt Nam. Cuốn sách không chỉ dừng lại ở việc dự đoán tương lai, mà còn đi sâu vào việc giải thích mối liên hệ giữa các kiếp sống: Tiền Thế (Quá khứ), Hiện Thế (Hiện tại) và Hậu Thế (Vị lai). 
              </p>
              <p className="text-slate-400 mb-6">
                Việc kết hợp thuật toán cổ điển với Công nghệ Trí tuệ nhân tạo (AI) ngày nay giúp cho việc tra cứu trở nên chính xác và cá nhân hóa hơn bao giờ hết. Hệ thống của chúng tôi sử dụng mô hình Gemini để phân tích các biến số phức tạp từ Can Chi và Ngũ Hành để đưa ra lời khuyên thực tiễn nhất cho người dùng hiện đại.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                 <div className="p-6 bg-slate-800/50 rounded-2xl">
                    <h4 className="text-yellow-500 font-bold mb-2">Tra cứu Can Chi</h4>
                    <p className="text-sm text-slate-400">Xác định Thiên Can, Địa Chi chính xác dựa trên lịch âm vạn niên, đảm bảo độ chính xác cao nhất cho quẻ số.</p>
                 </div>
                 <div className="p-6 bg-slate-800/50 rounded-2xl">
                    <h4 className="text-yellow-500 font-bold mb-2">Ngũ Hành Tương Sinh</h4>
                    <p className="text-sm text-slate-400">Phân tích mệnh của bạn để đưa ra các lời khuyên về hướng nghiệp, cộng sự và màu sắc phong thủy phù hợp.</p>
                 </div>
              </div>
            </article>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-24 bg-slate-900">
           <div className="container mx-auto px-4">
              <h2 className="text-center text-3xl font-traditional text-yellow-500 mb-12">Phản hồi từ cộng đồng</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex text-yellow-500 mb-4">{"★★★★★"}</div>
                    <p className="text-slate-300 italic mb-4">"Luận giải rất sâu sắc, AI viết lời khuyên cực kỳ hợp với hoàn cảnh hiện tại của mình. Rất đáng tiền để mở khóa report đầy đủ!"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                      <div>
                        <div className="text-sm font-bold">Người dùng ẩn danh #{i}204</div>
                        <div className="text-xs text-slate-500">Hội viên Premium</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2024 Diễn Cầm Tam Thế AI. Tất cả quyền được bảo lưu.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-yellow-500">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-yellow-500">Chính sách bảo mật</a>
            <a href="#" className="hover:text-yellow-500">Liên hệ hỗ trợ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
