class Lampa {
    constructor(index, szuloElem){
        this.index = index;
        this.#allapot= true;
        szuloElem.append(`<div class="negyzet"><p>Teszt</p></div>`)
        this.divElem = $("article div:last-child");

}
}