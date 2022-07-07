import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    // console.log("Hello???");
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemonList(response.data.results);
      console.log("Pokemon?", response.data);
    };
    getPokemons();
  }, []);

  return (
    <div>
      <h3>Pokemon</h3>
      {pokemonList
        ? pokemonList.map((pokemonObj) => {
            return <PokemonCard name={pokemonObj.name} />;
          })
        : "Loading.."}
    </div>
  );
};

export default PokemonListPage;
