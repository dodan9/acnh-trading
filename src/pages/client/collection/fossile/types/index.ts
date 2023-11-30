import { ColorEnum } from "@src/assets/enum";

export interface FossilDetailType {
  name: string;
  url: string;
  image_url: string;
  fossil_group: string;
  interactable: boolean; // 상호작용 여부 (아마도 기본 가구 type에서 extend 된 것 같다
  sell: number;
  hha_base: number; // 해피홈 점수
  width: number;
  length: number;
  colors: ColorEnum[];
}

export interface FossilGroupType {
  name: string;
  url: string;
  room: number; // 박물관 방 번호
  description: string;
}

export interface FossilGroupInfoType extends FossilGroupType {
  fossils: FossilDetailType[];
}

export interface FossilGroupInfoDetailType extends FossilGroupInfoType {
  matched: {
    type: "group" | "individual"; // 그룹 혹은 개별 화석
    name: string; // 그룹(혹은 화석) 이름
  };
}
