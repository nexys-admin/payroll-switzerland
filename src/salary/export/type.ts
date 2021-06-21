export enum SalaryType {
  Monthly = 1,
  Hourly = 2,
  Annual = 3,
}

export interface Contribution {
  amount: number;
  label: string;
  rate?: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface SalaryItem {
  company: string;
  contributions: Contribution[];
  dateStart: string;
  dateEnd: string;
  dateAdded: Date;

  incomeGross: number;
  incomeNet: number;
  user: User;
  afterTax?: { contributions: Contribution[] };
  type: SalaryType;
}
