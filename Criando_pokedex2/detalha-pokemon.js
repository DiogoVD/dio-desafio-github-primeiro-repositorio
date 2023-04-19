
const pokeDetailUnico = []
pokemonUnico = []
const detalhePokemon = document.getElementById('detalhePokemon');
const pokemondt = 1;


function convertPokemonToLiUnico(pokemon) {

    return `
            <button id="voltar" class="backButton" type="link">
                <a href="index.html"> <-- </a> 
            </button>
            <!------- Lista de detalhes do pokemon ------->

            <li class="dpokemon">

                <div class="detail">
                    <span class="name">${pokemon.name}</span>
                    <div class="detailNum">
                        <span class="number">#${pokemon.id}</span>
                    </div>
                    <ol class="types">
                        <span class="type">Grass</span>
                        <span class="type">Poison</span>
                    </ol>

                </div>
            </li>
            <li class="imagem">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" 
                        alt="bulbasaur">
            </li>
            <ol class="descritivoPokemon">
                <li class="descricaoPokemon">
                    Dados Pokemon

                </li>
            </ol>
            `
}

const getPokemon = async (id) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const dados =  await fetch(url);

    const dadosJson =  await dados.json();

    return dadosJson;

}
const buscapokemon = async (pokemon) => {

    const dadoPokemon = await getPokemon(pokemon);

    detalhePokemon.innerHTML = convertPokemonToLiUnico(dadoPokemon);
}


buscapokemon('88');



// const fetchPokemon = async (pokemon) => {
//     const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
//     if (APIResponse.status === 200) {
//       const data = await APIResponse.json();
//       return data;
//     }
//   }



//   const renderPokemon = async (pokemon) => {
  
//     const data = await fetchPokemon(pokemon);
//   }
//pokemonUnico = pokeDetailUnico.getPokemon(1)



