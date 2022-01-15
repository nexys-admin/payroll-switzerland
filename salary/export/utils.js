export const formatNumber = (n, d = 2, separator = "'") => n.toFixed(d).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + separator);
export const formatDate = (d) => [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("-");
export const getFilename = ({user, dateAdded}) => `salary_${user.firstName}-${user.lastName}_${formatDate(dateAdded)}.pdf`;
