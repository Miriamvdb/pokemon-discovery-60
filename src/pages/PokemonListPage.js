import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router-dom";

// 1. Filter input value

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState(null);
  const [filterInput, setFilterInput] = useState(""); // 1. Filter input value
  const params = useParams();

  useEffect(() => {
    // console.log("Hello???");
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemonList(response.data.results);
      // console.log("Pokemon?", response.data);
    };
    getPokemons();
    if (params.filterInput) {
      console.log("hmmm");

      setFilterInput(params.filterInput);
    }
  }, []);

  const updateFilterInput = (event) => {
    setFilterInput(event.target.value);
  };

  return (
    <div>
      <h3>Pokemon</h3>
      {/* 1.  Filter input value */}
      <input
        type="text"
        value={filterInput}
        onChange={updateFilterInput}
        placeholder="Search Pokemon"
      />
      <br />
      <br />
      {/* 1.  Filter input value (use startsWith) */}
      {pokemonList
        ? pokemonList
            .filter((pokemonObj) => pokemonObj.name.startsWith(filterInput))
            .map((pokemonObj, index) => {
              return <PokemonCard key={index} name={pokemonObj.name} />;
            })
        : "Loading.."}
    </div>
  );
};

export default PokemonListPage;
