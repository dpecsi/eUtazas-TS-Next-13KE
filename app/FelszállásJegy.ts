import Felszállás from "@/app/Felszállás";

export default class FelszállásJegy extends Felszállás {
  #jegyekSzáma: number;

  get ezÉrvénytelenFelszállás(): boolean {
    return this.#jegyekSzáma == 0;
  }

  get adatsor(): string {
    return `${this._kártyaAzon} ${this.#jegyekSzáma}`;
  }

  constructor(adatsor: string) {
    super(adatsor); // az ősosztály (Felszállás) konsktruktorának hívása (kötelező)
    this.#jegyekSzáma = Number(adatsor.split(" ")[4]);
  }
}
