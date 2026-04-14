import Megoldás from "@/app/Megoldás";

export default function eUtazásPage() {
  const m: Megoldás = new Megoldás("utasadat.txt");
  m.figyelmeztetés("figyelmeztetes.txt");
  return (
    <div className="font-mono">
      <p>2. feladat</p>
      <p>A buszra {m.felszállóFő} utas akart felszállni.</p>
      <p>3. feladat</p>
      <p>A buszra {m.érvénytelenFelszállásokDb} utas nem szállhatott fel.</p>
      <p>4. feladat</p>
      <p>A legtöbb utas ({m.maxKereséseTömb.maxFelszálló} fő) a {m.maxKereséseTömb.maxMegálló}. megállóban próbált felszállni.</p>
      <p>5. feladat</p>
      <p>Ingyenesen utazók száma: {m.ingyenesFelszállások} fő</p>
      <p>A kedvezményesen utazók száma: {m.kedvezményesFelszállások} fő</p>
    </div>
  );
}
