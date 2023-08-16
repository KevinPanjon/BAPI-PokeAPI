import axios from 'axios';
import { ref } from 'vue';

export async function PokemonList() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const cont = 150;
  const buah = [];

  try {
    for (let i = 1; i <= cont; i++) {
      const response = await axios.get(apiUrl + i);
      const pokemon = response.data;
      
      const pokemonDetails = {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase(),
        id: pokemon.id.toString().padStart(3, '0'),
        image: pokemon.sprites.front_default,
        types: pokemon.types.map((type) => ({
          name: type.type.name,
        })),
      };
      
      buah.push(pokemonDetails);
    }

    console.log(buah);
    return buah;
  } catch (error) {
    console.log("Error: No se pueden obtener los datos", error);
    return [];
  }
}
   

    


  