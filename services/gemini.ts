
import { GoogleGenAI } from "@google/genai";
import { UserInputs } from "../types";

export async function getAIPersonalization(inputs: UserInputs, can: string, chi: string, element: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Bạn là một bậc thầy về Diễn Cầm Tam Thế và chiêm tinh học Việt Nam.
    Dựa trên thông tin người dùng:
    - Họ tên: ${inputs.fullName}
    - Năm sinh (Can Chi): ${can} ${chi}
    - Ngũ hành: ${element}
    - Giờ sinh: ${inputs.birthHour}
    - Giới tính: ${inputs.gender === 'male' ? 'Nam' : 'Nữ'}

    Hãy viết một đoạn luận giải chuyên sâu, ngôn ngữ huyền bí nhưng hiện đại, tập trung vào "Sứ mệnh cuộc đời" và "Lời khuyên cốt lõi".
    Phản hồi bằng tiếng Việt, định dạng Markdown. Độ dài khoảng 200 chữ.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hệ thống AI đang bận, vui lòng thử lại sau để nhận lời khuyên chi tiết.";
  }
}
