
export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export enum BirthHour {
  TY = 'Tý (23h-01h)',
  SUU = 'Sửu (01h-03h)',
  DAN = 'Dần (03h-05h)',
  MAO = 'Mão (05h-07h)',
  THIN = 'Thìn (07h-09h)',
  TY_BRANCH = 'Tỵ (09h-11h)',
  NGO = 'Ngọ (11h-13h)',
  MUI = 'Mùi (13h-15h)',
  THAN = 'Thân (15h-17h)',
  DAU = 'Dậu (17h-19h)',
  TUAT = 'Tuất (19h-21h)',
  HOI = 'Hợi (21h-23h)'
}

export interface UserInputs {
  fullName: string;
  birthDate: string;
  birthHour: BirthHour;
  gender: Gender;
}

export interface FortuneResult {
  can: string;
  chi: string;
  element: string;
  sections: {
    id: string;
    title: string;
    content: string;
    isPremium: boolean;
  }[];
}

export interface PaymentStatus {
  isPaid: boolean;
  orderId?: string;
}
