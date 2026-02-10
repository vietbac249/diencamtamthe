
export const CAN_LIST = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
export const CHI_LIST = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];

export const NGŨ_HÀNH: Record<string, string> = {
  'Giáp-Tý': 'Hải Trung Kim', 'Ất-Sửu': 'Hải Trung Kim',
  'Bính-Dần': 'Lư Trung Hỏa', 'Đinh-Mão': 'Lư Trung Hỏa',
  'Mậu-Thìn': 'Đại Lâm Mộc', 'Kỷ-Tỵ': 'Đại Lâm Mộc',
  'Canh-Ngọ': 'Lộ Bàng Thổ', 'Tân-Mùi': 'Lộ Bàng Thổ',
  'Nhâm-Thân': 'Kiếm Phong Kim', 'Quý-Dậu': 'Kiếm Phong Kim',
  'Giáp-Tuất': 'Sơn Đầu Hỏa', 'Ất-Hợi': 'Sơn Đầu Hỏa',
  'Bính-Tý': 'Giản Hạ Thủy', 'Đinh-Sửu': 'Giản Hạ Thủy',
  'Mậu-Dần': 'Thành Đầu Thổ', 'Kỷ-Mão': 'Thành Đầu Thổ',
  'Canh-Thìn': 'Bạch Lạp Kim', 'Tân-Tỵ': 'Bạch Lạp Kim',
  'Nhâm-Ngọ': 'Dương Liễu Mộc', 'Quý-Mùi': 'Dương Liễu Mộc',
  'Giáp-Thân': 'Tuyền Trung Thủy', 'Ất-Dậu': 'Tuyền Trung Thủy',
  'Bính-Tuất': 'Ốc Thượng Thổ', 'Đinh-Hợi': 'Ốc Thượng Thổ',
  'Mậu-Tý': 'Tích Lịch Hỏa', 'Kỷ-Sửu': 'Tích Lịch Hỏa',
  'Canh-Dần': 'Tùng Bách Mộc', 'Tân-Mão': 'Tùng Bách Mộc',
  'Nhâm-Thìn': 'Trường Lưu Thủy', 'Quý-Tỵ': 'Trường Lưu Thủy',
  'Giáp-Ngọ': 'Sa Trung Kim', 'Ất-Mùi': 'Sa Trung Kim',
  'Bính-Thân': 'Sơn Hạ Hỏa', 'Đinh-Dậu': 'Sơn Hạ Hỏa',
  'Mậu-Tuất': 'Bình Địa Mộc', 'Kỷ-Hợi': 'Bình Địa Mộc',
  'Canh-Tý': 'Bích Thượng Thổ', 'Tân-Sửu': 'Bích Thượng Thổ',
  'Nhâm-Dần': 'Kim Bạch Kim', 'Quý-Mão': 'Kim Bạch Kim',
  'Giáp-Thìn': 'Phúc Đăng Hỏa', 'Ất-Tỵ': 'Phúc Đăng Hỏa',
  'Bính-Ngọ': 'Thiên Hà Thủy', 'Đinh-Mùi': 'Thiên Hà Thủy',
  'Mậu-Thân': 'Đại Trạch Thổ', 'Kỷ-Dậu': 'Đại Trạch Thổ',
  'Canh-Tuất': 'Thoa Xuyến Kim', 'Tân-Hợi': 'Thoa Xuyến Kim',
  'Nhâm-Tý': 'Tang Đố Mộc', 'Quý-Sửu': 'Tang Đố Mộc',
  'Giáp-Dần': 'Đại Khê Thủy', 'Ất-Mão': 'Đại Khê Thủy',
  'Bính-Thìn': 'Sa Trung Thổ', 'Đinh-Tỵ': 'Sa Trung Thổ',
  'Mậu-Ngọ': 'Thiên Thượng Hỏa', 'Kỷ-Mùi': 'Thiên Thượng Hỏa',
  'Canh-Thân': 'Thạch Lựu Mộc', 'Tân-Dậu': 'Thạch Lựu Mộc',
  'Nhâm-Tuất': 'Đại Hải Thủy', 'Quý-Hợi': 'Đại Hải Thủy'
};

export const BASE_FORTUNE_TEMPLATES = {
  general: "Dựa theo Diễn Cầm Tam Thế, cuộc đời của bạn có những thăng trầm như dòng nước. Thời trẻ gặp nhiều thử thách nhưng trung vận sẽ bắt đầu khởi sắc.",
  pastLife: "Tiền thế bạn vốn là người có phúc đức, từng gieo duyên lành nên kiếp này được hưởng sự thông minh, lanh lợi.",
  presentLife: "Hiện tại, bạn đang ở giai đoạn xây dựng nền tảng. Cần chú trọng vào việc tích lũy kiến thức và mở rộng quan hệ xã hội.",
  futureLife: "Hậu thế an nhàn, con cháu hiếu thảo. Nếu biết tu thân tích đức từ bây giờ, về già sẽ được hưởng vinh hoa phú quý.",
  career: "Công danh sự nghiệp có phần hanh thông nếu chọn đúng hướng Nam hoặc Đông Nam. Thích hợp với các nghề liên quan đến giao tiếp hoặc sáng tạo.",
  wealth: "Tài lộc đến muộn nhưng bền vững. Tránh đầu tư mạo hiểm vào những năm hạn.",
  marriage: "Hôn nhân cần sự nhẫn nại. Hai vợ chồng cần thấu hiểu để cùng nhau vượt qua những bất đồng nhỏ trong cuộc sống."
};
