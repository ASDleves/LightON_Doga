class Jatekter {
  
    constructor() {
      this.#lepes = 0;
      const szuloElem = $("article");
      const playerPTag = $(asideElem).find("p").first();
      const jatekfolyamat = $(asideElem).find("p").last();
      for (let index = 0; index < 9; index++) {
        const elem = new Lampa(index, szuloElem);
      }
    }
}