import Lampa from "./Lampa.js";
import InfoPanel from "./infopanel.js";
class Jatekter {
    #lampak
    constructor() {
      this.#lampak = 0;
      const szuloElem = $("article");

      for (let index = 0; index < 9; index++) {
        const lampa = new Lampa(index, szuloElem);
      }
      const sectionElem = $("section");
      const infoPanel = new InfoPanel(sectionElem);
      $(window).on("elemKivalasztas", (event) => {
        this.#lampak++;
        infoPanel.updateLampa(this.#lampak);
      });
    }
}

export default Jatekter;