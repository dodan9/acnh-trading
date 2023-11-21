export interface CreatureAvailableType {
  availability_array: { months: string; time: string }[];
  times_by_month: {
    1: "NA" | string;
    2: "NA" | string;
    3: "NA" | string;
    4: "NA" | string;
    5: "NA" | string;
    6: "NA" | string;
    7: "NA" | string;
    8: "NA" | string;
    9: "NA" | string;
    10: "NA" | string;
    11: "NA" | string;
    12: "NA" | string;
  };
  months: string;
  months_array: number[];
}

export interface CreatureFilterType {
  month?: string; // 영어 월, 숫자, current
  excludedetails?: boolean; // 상세 정보 제외(이름만)
  thumbsize?: number; // 이미지 크기
}

export interface CreatureDetailType {
  url: string;
  name: string;
  number: number;
  image_url: string;
  render_url: string;
  location: string;
  rarity: string;
  total_catch: number; // 최대 생성 수?
  sell_nook: number;
  catchphrases: string[]; // 잡았을 때 문구  tank_width: number; // 가로
  tank_length: number; // 세로
  north: CreatureAvailableType;
  south: CreatureAvailableType;
}
