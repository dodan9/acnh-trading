export interface EventFilterType {
  date: string; // yyyy-MM-dd
  year: string; // 올해 또는 내년이어야 함
  month: string; // 월 이름, 숫자 허용
  day: number; // 일
}

export enum EventTypeEnum {
  Event = "Event",
  NookShopping = "Nook Shopping",
  Recipes = "Recipes",
  Birthday = "Birthday",
}

export interface EventDetailType {
  event: string;
  date: string; // yyyy-MM-dd
  type: string;
  url: string;
}
