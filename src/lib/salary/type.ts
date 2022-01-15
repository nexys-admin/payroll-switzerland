// ref https://docs.google.com/spreadsheets/d/1TSkKCcl2ytqf0wt0gCME5uJ-UW3K5AeHGn6F5bh5GDk/edit#gid=0
// FR: https://www.swissdec.ch/fileadmin//user_upload/_ERP-Hersteller/RL4.0_20130514/RichtlinienLohndatenverarbeitung20130514_20130519_f.pdf

// p27
export enum AVSCode {
  casParticuliers = 0,
  jeunes = 1,
  soumisAvs = 2,
  beneficiaireRentesAVS = 3,
}

export enum ACCode {
  nonSoumis = 0,
  soumis = 1,
}

export interface Deduction {
  gs: number; // code ref
  label: string;
  rate: { employee: number; employer?: number };
  floor?: number;
  ceiling?: number;
  type: DeductionType;
}

export interface DeductionWAmount extends Deduction {
  amount: { employee: number; employer?: number };
}

export enum DeductionType {
  Brut,
  AVS,
  AC1,
  AC2,
  CAF,
  LPP,
  Net,
}

// Acronym
// LAA: Assurance accident
///IJM: Assurance indemnités journalières
// CAF: caisse allocation familiale (3.2.3)
// LPP Loi prevoyance professionelle
