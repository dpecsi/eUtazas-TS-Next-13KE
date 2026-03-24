import Felszállás from "@/app/Felszállás";

export default class FelszállásJegy extends Felszállás {
  #jegyekSzáma: number;

  constructor(adatsor: string) {
    super(adatsor); // az ősosztály (Felszállás) konsktruktorának hívása (kötelező)
    this.#jegyekSzáma = 0;
  }
}
