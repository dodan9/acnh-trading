export interface ArtworkFilterType {
  hasfake?: boolean;
  excludedetails?: boolean; // 상세 정보 제외 (이름만)
  thumbsize?: number;
}

export enum ArtworkArtType {
  Painting = "Painting",
  Statue = "Statue",
}

export interface ArtworkDetailType {
  name: string;
  url: string;
  has_fake: boolean;
  art_name: string; // 진짜 작품 이름
  art_type: ArtworkArtType; // 작품 타입
  author: string; // 진짜 작품 작가
  year: string; // 진짜 작품 출시 연도
  art_style: string; //  작품 스타일
  buy: number; // 작품 구매 가격
  sell: number; // 작품 판매 가격
  availability: string; // 작품 설명?
  width: number; // 작품 가로 길이
  length: number; // 작품 세로 길이
  real_info: { image_url: string; texture_url?: string; description: string }; // 진품 정보
  fake_info?: { image_url: string; texture_url?: string; description: string }; // 가품 정보
}
