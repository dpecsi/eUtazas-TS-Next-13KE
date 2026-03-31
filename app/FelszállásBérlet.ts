import dayjs from "dayjs";
import Felszállás from "@/app/Felszállás";

export default class FelszállásBérlet extends Felszállás {
  #típus: string;
  #érvényes: Date;

  get ezÉrvénytelenFelszállás(): boolean {
    return this._idő >= this.#érvényes;
  }

  get ezKedvezményesUtazás(): boolean {
    return ["TAB", "NYB"].includes(this.#típus) && !this.ezÉrvénytelenFelszállás;
  }

  get ezIngyenesUtazás(): boolean {
    return ["NYP", "RVS", "GYK"].includes(this.#típus) && !this.ezÉrvénytelenFelszállás;
  }

  constructor(adatsor: string) {
    super(adatsor); // az ősosztály (Felszállás) konsktruktorának hívása (kötelező)
    const adat = adatsor.split(" ");
    this.#típus = adat[3];
    this.#érvényes = dayjs(adat[4], "YYYYMMDD").add(1, "day").toDate();
  }
}
