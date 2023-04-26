class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Olá Diogo essa é a primeira TAG html";
    }
}

customElements.define("card-news", CardNews);