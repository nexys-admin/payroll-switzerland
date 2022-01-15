import * as T from "./type.js";
import * as Deductions from "./deductions.js";
const deductions = [
  {
    gs: 5010,
    label: "AVS",
    rate: {employee: Deductions.avs, employer: Deductions.avs},
    type: T.DeductionType.AVS
  },
  {
    gs: 5046,
    label: "APG",
    rate: {employee: Deductions.apg, employer: Deductions.apg},
    type: T.DeductionType.AVS
  },
  {
    gs: 5020,
    label: "AC1",
    rate: {employee: Deductions.ac1, employer: Deductions.ac1},
    type: T.DeductionType.AC1,
    ceiling: Deductions.thresholdAC
  },
  {
    gs: 5030,
    label: "AC2",
    rate: {employee: Deductions.ac2, employer: Deductions.ac2},
    floor: Deductions.thresholdAC,
    type: T.DeductionType.AC2
  },
  {
    gs: 0,
    label: "PC Fam",
    rate: {employee: Deductions.lpcfam},
    type: T.DeductionType.CAF
  }
];
const getAmountFiche = (incomeGross, {ceiling, floor}) => {
  if (ceiling && ceiling < incomeGross) {
    return ceiling;
  }
  if (floor && floor < incomeGross) {
    return incomeGross - floor;
  }
  return incomeGross;
};
export const getDeductionsFicheSalaire = (incomeGross, lpp) => [
  {
    label: "AVS",
    rate: Deductions.avsApg
  },
  {
    label: "Cotisation AC1",
    rate: Deductions.ac1,
    ceiling: Deductions.thresholdAC
  },
  {
    label: "Cotisation AC2",
    rate: Deductions.ac2,
    floor: Deductions.thresholdAC
  },
  {
    label: "LPCFAM Cotisation",
    rate: Deductions.lpcfam
  },
  {label: "Cotisation LPP", amount: lpp}
].map((x) => {
  if (x.amount) {
    return {label: x.label, amount: x.amount || 0};
  }
  const incomeBase = getAmountFiche(incomeGross, x);
  const amount = incomeBase * (x.rate || 100) / 100;
  return {...x, amount};
});
const getAmount = (d, base, key) => {
  const pRate = d.rate[key];
  if (!pRate) {
    return base;
  }
  const rate = pRate / 100;
  if (d.ceiling && d.ceiling < base) {
    return rate * d.ceiling;
  }
  if (d.floor && d.floor < base) {
    return rate * (base - d.floor);
  }
  return rate * base;
};
export const sumDeduction = (ds) => ds.map((a) => a.amount.employee).reduce((a, b) => a + b);
export const getDeductions = (base) => deductions.map((d) => {
  return {
    amount: {
      employee: getAmount(d, base, "employee"),
      employer: getAmount(d, base, "employer")
    },
    ...d
  };
});
export const formatRate = (n) => {
  if (typeof n !== "number") {
    return "-";
  }
  return n.toFixed(3) + "%";
};
export const formatAmount = (n) => {
  if (typeof n !== "number") {
    return "-";
  }
  const m = n * 20;
  const remainder = m % 1;
  const p = m - remainder;
  return (p / 20).toLocaleString();
};
export const toIncomeNet = (incomeGross, contributions) => incomeGross - contributions.map((x) => x.amount).reduce((a, b) => a + b, 0);
