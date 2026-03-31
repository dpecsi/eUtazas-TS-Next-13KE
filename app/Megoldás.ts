import fs from "fs";
import Felszállás from "@/app/Felszállás";
import FelszállásBérlet from "@/app/FelszállásBérlet";
import FelszállásJegy from "@/app/FelszállásJegy";

type MaxMegállóÉrtékek = {
  maxFelszálló: number;
  maxMegálló: number;
};

export default class Megoldás {
  #utasadatok: Felszállás[] = [];

  get felszállóFő(): number {
    return this.#utasadatok.length;
  }

  get érvénytelenFelszállásokDb(): number {
    let dbÉrvénytelen: number = 0;
    for (const e of this.#utasadatok) {
      if (e.ezÉrvénytelenFelszállás) dbÉrvénytelen++;
    }
    return dbÉrvénytelen;
  }

  get maxKereséseTömb(): MaxMegállóÉrtékek {
    const max: MaxMegállóÉrtékek = { maxMegálló: -1, maxFelszálló: -1 };
    const stat: number[] = [];
    for (const e of this.#utasadatok) {
      if (!stat.keys().toArray().includes(e.megállóSorszáma)) stat[e.megállóSorszáma] = 0;
      stat[e.megállóSorszáma]++;
    }
    max.maxFelszálló = Math.max(...stat);
    max.maxMegálló = stat.indexOf(max.maxFelszálló);
    return max;
  }

  get kedvezményesFelszállások(): number {
    return this.#utasadatok.filter((x) => x.ezKedvezményesUtazás).length;
  }

  get ingyenesFelszállások() {
    let db: number = 0;
    for (const e of this.#utasadatok) {
      if (e.ezIngyenesUtazás) db++;
    }
    return db;
  }

  constructor(forrás: string) {
    const adatsorok: string[] = fs.readFileSync(forrás, "utf-8").split("\n");
    for (const line of adatsorok) {
      const adatsor: string = line.trim();
      if (adatsor.length == 0) continue;
      const típus = adatsor.split(" ")[3];
      if (típus == "JGY") this.#utasadatok.push(new FelszállásJegy(adatsor));
      else this.#utasadatok.push(new FelszállásBérlet(adatsor));
    }
  }
}
