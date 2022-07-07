import { NavLink } from "react-router-dom";

const PokemonCard = (props) => {
  return (
    <div>
      <NavLink to={`/details/${props.name}`}>{props.name}</NavLink>
    </div>
  );
};

export default PokemonCard;
