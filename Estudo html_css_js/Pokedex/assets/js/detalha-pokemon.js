

const exibePokemon = document.getElementById('exibePokemon');

function convertPokemonToLiUnico(pokemon) {

    return `
        <ol id="detalhePokemon" class="dpokemon ${pokemon.type}">
            <button id="voltar" class="backButton" type="link">
                <a href="index.html"> &olarr; </a> 
            </button>
            <!------- Lista de detalhes do pokemon ------->

            <li class="dpokemon">

                <div class="detail">
                    <span class="name">${pokemon.name}</span>
                    <div class="detailNum">
                        <span class="number">#${pokemon.number}</span>
                    </div>
                    <ol class="types">
                        ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
                        
                    </ol>

                </div>
            </li>
            <li class="image">
                <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
            </li>
            <ol class="descritivoPokemon">
                <li class="descricaoPokemon">
                    Golpes do Pokemon

                </li>
                <br></br>
                ${pokemon.moves.map((move) => `<li class="move">${move}</li>`).join('')}
            </ol>
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
    const pokeFinalDetail = convertPokeApiDetailToPokemonka(dadoPokemon);
    exibePokemon.innerHTML = convertPokemonToLiUnico(pokeFinalDetail);
    
}

function chamapoke(id){
    buscapokemon(id);
    
}

function convertPokeApiDetailToPokemonka(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const moves = pokeDetail.moves.map((moveSlot) => moveSlot.move.name)
    const [move] = moves

    pokemon.moves = moves
    pokemon.move = move

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    //pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeDetail.id}.gif`
    return pokemon
}
