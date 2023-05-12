class Lampa {
    #kattint = 0;
    #allapot
    constructor(id,szuloElem, allapot) {
        this.id = id;
        this.#allapot= true;
        szuloElem.append(`<div class="Lampa"><p>Teszt</p></div>`)
        
        this.divElem = $("article div:last-child");
        this.setAllapot()
        this.szinBeallit()
        this.esemenyTrigger()
        };

    setAllapot(){
        
        const esely = Math.floor(Math.random() * 100)+1
        if (esely <= 20){
            this.divElem.css("background-color", "orange")
            this.#kattint+= 1;
            this.#allapot= true;
        }else{
            this.divElem.css("background-color", "green");
            this.#kattint= 0;
            this.#allapot= false;
        }
    }

    szinBeallit(){
        this.divElem.on("click", () => {
            if (this.#kattint === 0) {
              this.divElem.css("background-color", "orange");
              this.#kattint+= 1;
              this.#allapot= true;
            } else {
              this.divElem.css("background-color", "green");
              this.#kattint= 0;
              this.#allapot= false;
          }
         
    })}
    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {
             detail: this
            });
        window.dispatchEvent(esemeny)
    }
}

export default Lampa;