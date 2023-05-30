/* card news testes da aula 1
class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Olá Diogo essa é a primeira TAG html";
    }
}
customElements.define("card-news", CardNews);
*/

class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        // detalhe do card lado right
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("titulo");
        linkTitulo.href = this.getAttribute("link-url");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(conteudo);

        // detalhe do card lado right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card_right");

        const novaImagem = document.createElement("img");
        novaImagem.src = this.getAttribute("imagem-url") || "assets/image/imagem_default.jpg";
        novaImagem.alt = this.getAttribute("imagem-alt") || "photo";

        cardRight.appendChild(novaImagem);

        //-------------------------------------------------------------
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.74); 
                box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.74);
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card_left > span{
                font-weight: 400;
            }
            
            .card_left > a{
                margin-top: 15px;
                font-size: 25px;
                font-style: 400px;
                text-decoration: none;
                color: black;
            }
            
            .card_left > p{
                color: gray;
            }

        `
        return style;
    }
}

customElements.define("card-news", CardNews);