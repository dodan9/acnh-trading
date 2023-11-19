export enum VillagerSpecies {
  Alligator = "Alligator",
  Anteater = "Anteater",
  Bear = "Bear",
  Bear_cub = "Bear cub",
  Bird = "Bird",
  Bull = "Bull",
  Cat = "Cat",
  Chicken = "Chicken",
  Cow = "Cow",
  Deer = "Deer",
  Dog = "Dog",
  Duck = "Duck",
  Eagle = "Eagle",
  Elephant = "Elephant",
  Frog = "Frog",
  Goat = "Goat",
  Gorilla = "Gorilla",
  Hamster = "Hamster",
  Hippo = "Hippo",
  Horse = "Horse",
  Koala = "Koala",
  Kangaroo = "Kangaroo",
  Lion = "Lion",
  Monkey = "Monkey",
  Mouse = "Mouse",
  Octopus = "Octopus",
  Ostrich = "Ostrich",
  Penguin = "Penguin",
  Pig = "Pig",
  Rabbit = "Rabbit",
  Rhinoceros = "Rhinoceros",
  Sheep = "Sheep",
  Squirrel = "Squirrel",
  Tiger = "Tiger",
  Wolf = "Wolf",
}

export enum VillagerPersonality {
  Big_sister = "Big sister",
  Cranky = "Cranky",
  Jock = "Jock",
  Lazy = "Lazy",
  Normal = "Normal",
  Peppy = "Peppy",
  Smug = "Smug",
  Snooty = "Snooty",
}

export enum VillagerSex {
  Male = "Male",
  Female = "Female",
}

export enum VillagerBirthSign {
  Aries = "Aries",
  Taurus = "Taurus",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Leo = "Leo",
  Virgo = "Virgo",
  Libra = "Libra",
  Scorpio = "Scorpio",
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Pisces = "Pisces",
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
  appearances: VillagerDebut[]; // 처음 미디어에 등장 (뭔 차이지?)
  nh_details: NewHorizonsVillagerType;
}
