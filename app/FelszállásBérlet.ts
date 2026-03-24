import Felszállás from "@/app/Felszállás";

export default class FelszállásBérlet extends Felszállás {
  #típus: string;
  #érvényes: Date;

  constructor(adatsor: string) {
    super(adatsor); // az ősosztály (Felszállás) konsktruktorának hívása (kötelező)
    this.#típus = "kilincs";
    this.#érvényes = new Date();
  }
}
