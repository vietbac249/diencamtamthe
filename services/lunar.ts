
import { CAN_LIST, CHI_LIST, NGŨ_HÀNH } from '../constants';

export function calculateCanChi(year: number) {
  const canIndex = year % 10;
  const chiIndex = year % 12;

  const can = CAN_LIST[canIndex];
  const chi = CHI_LIST[chiIndex];
  
  const key = `${can}-${chi}`;
  const element = NGŨ_HÀNH[key] || 'Chưa xác định';

  return { can, chi, element };
}

export function generateBaseFortune(can: string, chi: string, hour: string) {
  // In a real app, this would query a database of thousands of records.
  // Here we mock the behavior with logic strings.
  return [
    { id: 'overview', title: 'Tổng Quan', content: `Người tuổi ${can} ${chi} sinh vào giờ ${hour} thường có tính cách kiên định, có hoài bão lớn. Cuộc đời trải qua nhiều cung bậc cảm xúc, từ gian nan đến vinh quang.`, isPremium: false },
    { id: 'past', title: 'Tiền Thế', content: `Kiếp trước bạn là một bậc trí giả, có công truyền dạy kiến thức cho đời. Nhờ vậy, kiếp này bạn sinh ra đã mang sẵn tư chất thông tuệ.`, isPremium: true },
    { id: 'present', title: 'Hiện Thế', content: `Giai đoạn này là lúc bạn đang gặt hái những quả ngọt từ sự nỗ lực trước đó. Sự nghiệp đang trên đà phát triển ổn định.`, isPremium: true },
    { id: 'future', title: 'Hậu Thế', content: `Càng về già càng hưởng phúc. Điền sản dồi dào, con cái thành đạt, không phải lo âu về vật chất.`, isPremium: true },
    { id: 'career', title: 'Công Danh', content: `Phù hợp với các công việc lãnh đạo hoặc chuyên gia tư vấn. Có quý nhân phù trợ vào những năm tuổi lẻ.`, isPremium: true },
    { id: 'wealth', title: 'Tài Lộc', content: `Tiền bạc như nước triều, lúc đầy lúc vơi nhưng không bao giờ cạn. Cần cẩn trọng trong việc cho vay mượn.`, isPremium: true },
    { id: 'marriage', title: 'Hôn Nhân', content: `Duyên nợ sâu đậm, vợ chồng hòa hợp. Đôi khi có chút sóng gió nhưng đều có thể hóa giải bằng sự cảm thông.`, isPremium: true },
  ];
}
