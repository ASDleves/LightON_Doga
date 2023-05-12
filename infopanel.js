class InfoPanel {
    #lekapcsolt
    constructor(szuloElem) {
        const p2 = $("<p>").text("Lekapcsolt lámpák: 0");
        
        this.#lekapcsolt = p2
      $(szuloElem).append(p2);
    }
    updateLampa(lampak) {
        this.#lekapcsolt.text(`Lekapcsolt lámpák: ${lampak}`);
      }
  
  }
  
  export default InfoPanel;