import * as T from "./type";

export const formatNumber = (
  n: number,
  d: number = 2,
  separator: string = "'"
) => n.toFixed(d).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + separator);
export const formatDate = (d: Date) =>
  [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("-");

export const getFilename = ({ user, dateAdded }: T.SalaryItem): string =>
  `salary_${user.firstName}-${user.lastName}_${formatDate(dateAdded)}.pdf`;
