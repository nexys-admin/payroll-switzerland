import * as T from "./type.js";
const thresholdAC = 148200;
const deductions = [
  {
    gs: 5010,
    label: "AVS",
    rate: {employee: 5.15, employer: 5.275},
    type: T.DeductionType.AVS
  },
  {
    gs: 5046,
    label: "APG",
    rate: {employee: 0.125, employer: 0.125},
    type: T.DeductionType.AVS
  },
  {
    gs: 5020,
    label: "AC1",
    rate: {employee: 1.1, employer: 1.1},
    type: T.DeductionType.AC1,
    ceiling: thresholdAC
  },
  {
    gs: 5030,
    label: "AC2",
    rate: {employee: 0.5, employer: 0.5},
    floor: 148200,
    type: T.DeductionType.AC2
  },
  {
    gs: 0,
    label: "PC Fam",
    rate: {employee: 0.06},
    type: T.DeductionType.CAF
  }
];
const getAmount = (d, base, key) => {
  const pRate = d.rate[key];
  if (!pRate) {
    return void 0;
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
