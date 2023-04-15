
// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 12;
let offset = 0;
const maxRecord = 151; //limite de pokemons da 1geração
let limitMax;


function convertPokemonToLi(pokemon){

    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
    
        //O codigo abaixo realiza a conversao da lista de pokemons em uma lista html usando a função map que transforma uma função em outra.
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

        //----------------------------------------------------------------------------------------------------------
        // O codigo acima é uma melhoria da codificação abaixo

        // const   newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
        // const newListHtml = newList.join('')    //junta a lista em uma string sem separador('')
        // pokemonList.innerHTML += newListHtml    //concatena a linta no html

        //----------------------------------------------------------------------------------------------------------
        // O codigo acima é uma melhoria da codificação abaixo

        // const   newList = pokemons.map((pokemon) => {
        //     return convertPokemonToLi(pokemon)

        // })
        // const newListHtml = newList.join('')    //junta a lista em uma string sem separador('')
        // pokemonList.innerHTML += newListHtml    //concatena a linta no html

        //----------------------------------------------------------------------------------------------------------
        // O codigo acima é uma melhoria da codificação abaixo

        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     pokemonList.innerHTML += convertPokemonToLi(pokemon);
        // }
        
    })
    .catch((error) => console.error(error))
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener ("click", () => {
    offset += limit
    const pokePagination = offset + limit

    if(pokePagination < maxRecord){
        loadPokemonItens(offset, limit);

    }else{
        limitMax = maxRecord - offset;
        loadPokemonItens(offset, limitMax)
        loadMoreButton.parentElement.removeChild(loadMoreButton);

    }

    
})