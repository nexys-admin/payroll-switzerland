import { Canton } from "./type";

// https://business-cool.com/decryptage/international/salaire-moyen-suisse/
export const avgSalary: [string, Canton, number][] = [
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
  ["Interlaken", Canton.BE, 3117],
];

export const cantonList: string[] = Object.values(Canton)
  .filter((x) => typeof x == "number")
  .map((x) => Canton[x])
  .map((x) => Canton[x]);

export const cantonListOptionSet: { id: Canton; name: string }[] =
  Object.values(Canton)
    .filter((x) => typeof x == "string")

    .map((x) => ({ id: x as Canton, name: Canton[x] }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
