import dayjs from "dayjs";

export default abstract class Felszállás {
  // "_" karakter jelzi, hogy a mező protected
  protected _megállóSorszáma: number;
  protected _idő: Date;
  protected _kártyaAzon: string;

  get ezÉrvénytelenFelszállás(): boolean {
    return false;
  }

  get megállóSorszáma(): number {
    return this._megállóSorszáma;
  }

  get ezKedvezményesUtazás(): boolean {
    return false;
  }

  get ezIngyenesUtazás(): boolean {
    return false;
  }

  get adatsor(): string {
    return `${this._kártyaAzon}`;
  }

  get ezLejár3Nap(): boolean {
    return false;
  }

  constructor(adatsor: string) {
    const [m, idő, k] = adatsor.split(" ");
    this._megállóSorszáma = Number(m);
    // this._idő = new Date(
    //   Number(idő.substring(0, 4)),
    //   Number(idő.substring(4, 6)) - 1,
    //   Number(idő.substring(6, 8)),
    //   Number(idő.substring(9, 11)),
    //   Number(idő.substring(11, 13)),
    // );
    this._idő = dayjs(idő, "YYYYMMDD-HHmm").toDate();
    this._kártyaAzon = k;
  }

  static napokszama(első: Date, második: Date): number {
    return Math.round((első.getTime() - második.getTime()) / (1000 * 60 * 60 * 24));
  }
}
