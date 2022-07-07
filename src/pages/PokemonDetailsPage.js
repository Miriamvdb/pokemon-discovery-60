import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <h3>{params.pokemonname}</h3>
    </div>
  );
};

export default PokemonDetailsPage;
