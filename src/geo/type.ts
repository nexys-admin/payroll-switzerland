//https://en.wikipedia.org/wiki/Cantons_of_Switzerlandenum
export enum Canton {
  ZH = "ZH",
  BE = "BE",
  LU = "LU",
  UR = "UR",
  SZ = "SZ",
  OW = "OW",
  NW = "NW",
  GL = "GL",
  ZG = "ZG",
  FR = "FR",
  SO = "SO",
  BS = "BS",
  BL = "BL",
  SH = "SH",
  AR = "AR",
  AI = "AI",
  SG = "SG",
  GR = "GR",
  AG = "AG",
  TG = "TG",
  TI = "TI",
  VD = "VD",
  VS = "VS",
  NE = "NE",
  GE = "GE",
  JU = "JU",
}

export interface Municipality {
  GDEKT: Canton;
  GDEBZNR: number;
  GDENR: number;
  GDENAME: string;
  GDENAMK: string;
  GDEBZNA: string;
  GDEKTNA: string;
  GDEMUTDAT: string;
}
