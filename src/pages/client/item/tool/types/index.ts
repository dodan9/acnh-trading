export interface ToolDetailType {
  name: string;
  url: string;
  uses: number; // 사용 가능 횟수
  hha_base: number; // 플레이어의 Happy Home Academy 점수를 제공하는 기본값
  sell: number; // 판매 가격
  customizable: boolean; // 리폼 가능 여부
  custom_kits: number; // 리폼 키트 필요 수
  custom_body_part: string; // 변형 가능 부분
  version_added: string; // 추가된 버전
  unlocked: boolean; // 게임 내 사용 가능 여부
  notes: string;
  availability: { from: string; note: string }[];
  buy: { price: number; currency: string }[];
  variations: { variation: string; image_url: string }[];
}
