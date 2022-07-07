import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetailsPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // console.log("Doettie het?");
    const getPokemonDetails = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonname}`
      );
      //   console.log("Wat is dit?", response.data);
      setPokemon(response.data);
    };
    getPokemonDetails();
  }, [params.pokemonname]);

  return pokemon ? (
    <div className="Pokemon">
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <p>
        Types:{" "}
        {pokemon.types.map((typeObj, index) => (
          <span key={index}>{typeObj.type.name}</span>
        ))}
      </p>
      <p>Weight: {pokemon.weight} hectograms</p>
    </div>
  ) : (
    "Loading.."
  );
};

export default PokemonDetailsPage;
