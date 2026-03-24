export default abstract class Felszállás {
  // "_" karakter jelzi, hogy a mező protected
  protected _megállóSorszáma: number;
  protected _idő: Date;
  protected _kártyaAzon: string;

  constructor(adatsor: string) {
    const [m, idő, k] = adatsor.split(" ");
    this._megállóSorszáma = Number(m);
    this._idő = new Date(
      Number(idő.substring(0, 4)),
      Number(idő.substring(4, 6)) - 1,
      Number(idő.substring(6, 8)),
      Number(idő.substring(9, 11)),
      Number(idő.substring(11, 13)),
    );
    this._kártyaAzon = k;
  }
}
