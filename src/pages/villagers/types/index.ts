export enum VillagerSpecies {
  악어 = "Alligator",
  개미핥기 = "Anteater",
  곰 = "Bear",
  아기곰 = "Bear cub",
  새 = "Bird",
  고양이 = "Cat",
  닭 = "Chicken",
  암소 = "Cow",
  수소 = "Bull",
  사슴 = "Deer",
  개 = "Dog",
  오리 = "Duck",
  독수리 = "Eagle",
  코끼리 = "Elephant",
  개구리 = "Frog",
  염소 = "Goat",
  고릴라 = "Gorilla",
  햄스터 = "Hamster",
  하마 = "Hippo",
  말 = "Horse",
  코알라 = "Koala",
  캥거루 = "Kangaroo",
  사자 = "Lion",
  원숭이 = "Monkey",
  쥐 = "Mouse",
  문어 = "Octopus",
  타조 = "Ostrich",
  펭귄 = "Penguin",
  돼지 = "Pig",
  토끼 = "Rabbit",
  코뿔소 = "Rhinoceros",
  양 = "Sheep",
  다람쥐 = "Squirrel",
  호랑이 = "Tiger",
  늑대 = "Wolf",
}

export enum VillagerPersonality {
  성숙 = "Big sister",
  무뚝뚝 = "Cranky",
  운동광 = "Jock",
  먹보 = "Lazy",
  단순활발 = "Normal",
  아이돌 = "Peppy",
  느끼 = "Smug",
  친절 = "Snooty",
}

export enum VillagerSex {
  Male = "Male",
  Female = "Female",
}

export enum VillagerBirthSign {
  양자리 = "Aries",
  황소자리 = "Taurus",
  쌍둥이자리 = "Gemini",
  게자리 = "Cancer",
  사자자리 = "Leo",
  처녀자리 = "Virgo",
  천징자리 = "Libra",
  전갈자리 = "Scorpio",
  궁수자리 = "Sagittarius",
  염소자리 = "Capricorn",
  물병자리 = "Aquarius",
  물고기자리 = "Pisces",
}

export enum VillagerDebut {
  Doubutsu_no_Mori = "DNM",
  AnimalCrossing = "AC",
  Doubutsu_no_Mori_e = "E_PLUS",
  WildWorld = "WW",
  CityFolk = "CF",
  NewLeaf = "NL",
  WelcomAmiibo = "WA",
  NewHorizons = "NH",
  FILM = "FILM",
  HappyHomeDesigner = "HHD",
  PC = "PC",
}

export enum VillagerHobby {
  Education = "Education",
  Fashion = "Fashion",
  Fitness = "Fitness",
  Music = "Music",
  Nature = "Nature",
  Play = "Play",
}

export interface NewHorizonsVillagerType {
  image_url: string; // 전신 사진
  photo_url: string; // 액자 사진
  icon_url: string; // 주민 아이콘
  quote: string; // 액자 뒤 좋아하는 말
  sub_personality: "A" | "B";
  catchphrase: string; // 말버릇
  clothing: string; // 기본 옷
  clothing_variation: string; // 기본 옷 종류?
  fav_styles: string[]; // 좋아하는 옷 종류
  fav_colors: string[]; // 좋아하는 색
  hobby: VillagerHobby;
  house_interior_url: string; // 집 인테리어
  house_exterior_url: string; // 집 외관
  house_wallpaper: string; // 벽지
  house_flooring: string; // 바닥
  house_music: string; // 음악
  house_music_note: string; // 음악에 관한 정보 (재생 여부 등?)
}

export interface Villager {
  url: string;
  name: string;
  alt_name: string; // 과거 이름(소수만 이름 바뀜)
  title_color: string; // 주민 테마 컬러 코드 (배경)
  text_color: string; // 주민 테마 컬러 코드 (글자)
  id: string; // uuid
  image_url: string; // 프로필 이미지
  species: VillagerSpecies; // 종족
  personality: VillagerPersonality; // 성격
  gender: VillagerSex; // 성별
  birthday_month: string; // 생일 월
  birthday_day: string; // 생일 일
  sign: VillagerBirthSign; // 별자리
  quote: string; // 주민들 인용문 (액자 뒷면에 적힌 좋아하는 말)
  phrase: string; // 말버릇
  prev_phrases?: any[]; // 이전 말버릇
  clothing: string;
  islander: boolean; // 게임큐브 때 동물의 숲 주민이었는가 (36마리)
  debut: VillagerDebut; // 처음 등장한
  appearances: VillagerDebut[]; // 등장하는 시리즈
  nh_details?: NewHorizonsVillagerType;
}
