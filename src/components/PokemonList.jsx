import React from "react";
import Card from "./Card";

const PokemonList = ({ pokemons }) => {

  return(
      <div>
        {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon}></Card>
        ))}
      </div>
  );
};

export default PokemonList;