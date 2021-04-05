import React from "react";
import '../assets/styles/components/CardDetail.scss'
import typeColors from "../helpers/typeColors";

const Card = ({pokemon}) => (
    <div className="CardDetail" onClick={ ()=> (pokemon.id) }>
        <div className="CardDetail__img">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="CardDetail__name">
            {`#${pokemon.id} ${pokemon.name}`}
        </div>
        <div className="CardDetail__types">
            {
                pokemon.types.map(type => {
                    return (
                        <div key={type.type.name} className="CardDetail__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })

            }
        </div>
        <div className="CardDetail__sprites">
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} style={{ width: '20%', height: 'auto'}}/>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} style={{ width: '20%', height: 'auto'}}/>
        </div>
        <div className="CardDetail__info" style={{float: 'right', marginRight: '20px'}}>
            <div className="CardDetail__data CardDetail__data--weight">
                <p className="title">Moves</p>
                {
                    pokemon.moves.slice(0, 5).map(item => {
                        return (
                            <p key={item.move.name}>{item.move.name}</p>
                        )
                    })
                }
            </div>
        </div>

        <div className="CardDetail__info">
            <div className="CardDetail__data CardDetail__data--weight">
                <p className="title">Weight</p>
                <p>{pokemon.weight}</p>
            </div>
            <div className="CardDetail__data CardDetail__data--height">
                <p className="title">Height</p>
                <p>{pokemon.height}</p>
            </div>
            <div className="CardDetail__data CardDetail__data--ability">
                <p className="title">Ability</p>
                <p>{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>
);

export default Card;

