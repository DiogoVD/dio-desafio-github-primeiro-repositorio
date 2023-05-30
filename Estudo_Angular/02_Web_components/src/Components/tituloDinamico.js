class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        
        //base do componente
        const componentRoot = document.createElement("h1");
        //componentRoot.textContent = "Diogo";
        componentRoot.textContent = this.getAttribute("titulo");

        //estilização do componente
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: green;
            }
        `;

        //envio para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);