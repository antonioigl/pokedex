import React from "react";
import '../assets/styles/components/Card.scss'
import typeColors from "../helpers/typeColors";

const Card = ({pokemon}) => (
    <div className="Card" onClick={ ()=> (pokemon.id) }>
        <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="Card__name">
            {`#${pokemon.id} ${pokemon.name}`}
        </div>
        <div className="Card__types">
            {
                pokemon.types.map(type => {
                    return (
                        <div key={type.type.name} className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })
            }
        </div>
        <div className="Card__info">
            <div className="Card__data Card__data--weight">
                <p className="title">Weight</p>
                <p>{pokemon.weight}</p>
            </div>
            <div className="Card__data Card__data--height">
                <p className="title">Height</p>
                <p>{pokemon.height}</p>
            </div>
            <div className="Card__data Card__data--ability">
                <p className="title">Ability</p>
                <p>{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>
);

export default Card;

