export var Canton;
(function(Canton2) {
  Canton2["ZH"] = "ZH";
  Canton2["BE"] = "BE";
  Canton2["LU"] = "LU";
  Canton2["UR"] = "UR";
  Canton2["SZ"] = "SZ";
  Canton2["OW"] = "OW";
  Canton2["NW"] = "NW";
  Canton2["GL"] = "GL";
  Canton2["ZG"] = "ZG";
  Canton2["FR"] = "FR";
  Canton2["SO"] = "SO";
  Canton2["BS"] = "BS";
  Canton2["BL"] = "BL";
  Canton2["SH"] = "SH";
  Canton2["AR"] = "AR";
  Canton2["AI"] = "AI";
  Canton2["SG"] = "SG";
  Canton2["GR"] = "GR";
  Canton2["AG"] = "AG";
  Canton2["TG"] = "TG";
  Canton2["TI"] = "TI";
  Canton2["VD"] = "VD";
  Canton2["VS"] = "VS";
  Canton2["NE"] = "NE";
  Canton2["GE"] = "GE";
  Canton2["JU"] = "JU";
})(Canton || (Canton = {}));
export const avgSalary = [
  ["Buchs", Canton.AG, 7625],
  ["Vevey", Canton.VD, 5905],
  ["Zoug", Canton.ZG, 5463],
  ["Zurich", Canton.ZH, 5290],
  ["Nyon", Canton.VD, 4811],
  ["Bâle", Canton.BS, 4697],
  ["Genève", Canton.GE, 4682],
  ["Berne", Canton.BE, 4665],
  ["Davos", Canton.GR, 4590],
  ["Neuchâtel", Canton.NE, 4549],
  ["Schaffhouse", Canton.SH, 4549],
  ["Montreux", Canton.VD, 4469],
  ["Lausanne", Canton.VD, 4399],
  ["Fribourg", Canton.FR, 4379],
  ["Locarno", Canton.TI, 4374],
  ["Lucerne", Canton.LU, 4298],
  ["Winterthour", Canton.ZH, 4228],
  ["Lugano", Canton.TI, 4144],
  ["Coire", Canton.GR, 4114],
  ["Sion", Canton.VS, 4098],
  ["Langenthal", Canton.VS, 3502],
  ["Arbon", Canton.TG, 3499],
  ["Olten", Canton.SO, 3414],
  ["Interlaken", Canton.BE, 3117]
];
export const cantonList = Object.values(Canton).filter((x) => typeof x == "number").map((x) => Canton[x]).map((x) => Canton[x]);
export const cantonListOptionSet = Object.values(Canton).filter((x) => typeof x == "string").map((x) => ({id: x, name: Canton[x]})).sort((a, b) => a.name > b.name ? 1 : -1);
export const getMunicipalities = async () => {
  const filename = "/municipalities.tsv";
  const r = await fetch(filename);
  const t = await r.text();
  const arr = t.split("\n").map((line) => line.split("	"));
  const check = arr.filter((x) => x.length !== 8).length > 0;
  if (check) {
    throw Error(`${filename} could not be read`);
  }
  return arr;
};
