import axios from 'axios';

export class PokemonService {

    

    getAllPokemon = async () => {
        let list = []
        for (var i = 1; i<51;i++){
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res)
            list.push({name:pokemon.data.name,habilidad: pokemon.data.abilities, imagen: pokemon.data.sprites.front_default})
        }
        const JsonArray = JSON.stringify(list);
        return JsonArray;
    }
}


//let list = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50').then(res => res.data.results);
//console.log(list[1].url)