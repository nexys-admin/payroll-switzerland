const filename = "/municipalities.tsv";
export const get = async () => {
  const r = await fetch(filename);
  const t = await r.text();
  const arr = t.split("\n").splice(1).map((line) => line.split("	"));
  return arr.map((a) => {
    if (a.length !== 8) {
      throw Error(`${filename} could not be read: ${JSON.stringify(a)}`);
    }
    const m = {
      GDEKT: a[0],
      GDEBZNR: Number(a[1]),
      GDENR: Number(a[2]),
      GDENAME: a[3],
      GDENAMK: a[4],
      GDEBZNA: a[5],
      GDEKTNA: a[6],
      GDEMUTDAT: a[7]
    };
    return m;
  });
};
