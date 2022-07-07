import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useNavigate, useParams } from "react-router-dom";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState(null);
  const [filterInput, setFilterInput] = useState("");
  const params = useParams();
  const navigate = useNavigate();

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
      setFilterInput(params.filterInput);
    } else {
      setFilterInput("");
    }
  }, [params.filterInput]);

  const updateFilterInput = (event) => {
    setFilterInput(event.target.value);
    navigate(`/${event.target.value}`);
  };

  return (
    <div>
      <h3>Pokemon</h3>
      <input
        type="text"
        value={filterInput}
        onChange={updateFilterInput}
        placeholder="Search Pokemon"
      />
      <br />
      <br />
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
