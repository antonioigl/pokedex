import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import Navbar from "../components/Navbar";
import {getPokemon, getPokemonEvolutions} from "../api";
import CardDetail from "../components/CardDetail";
import Footer from "../components/Footer";
import BackList from "../components/BackList";
import Card from "../components/Card";
import '../assets/styles/Styles.scss'


const Show = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [evolutions, setEvolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchEvolution(id) {
            setLoading(true);
            const pokemonData = await getPokemon(id);
            setPokemon(pokemonData);
            const evolutionsData = await getPokemonEvolutions(pokemonData.species.url);
            setEvolutions(evolutionsData);
            setLoading(false);
        }

        fetchEvolution(id);

    }, [id]);

    return (
        <>
            <Navbar title={!loading && `#${pokemon.id} ${pokemon.name}`} />
            <div>
                <>
                    <div style={{ textAlign: 'center'}}>
                        <h1>Pokémon Detail</h1>
                    </div>

                    <div className="grid-container">
                        { loading ?  <h5 style={{ textAlign: 'center' }}>Loading...</h5> : (
                            <CardDetail key={pokemon.id} pokemon={pokemon}/>
                        )}
                    </div>

                    <div style={{ textAlign: 'center'}}>
                        <h1>Evolution Chain</h1>
                    </div>

                    <div className="grid-container">
                        {
                            loading ?  <h5 style={{ textAlign: 'center' }}>Loading...</h5> : (
                                !evolutions.length ? <h4 style={{ textAlign: 'center' }}>Pokémon does not evolve</h4> :
                                evolutions.map((pokemonEvolution) => (
                                <Link to={`${pokemonEvolution.id}`} style={{ textDecoration: 'none'}} title={pokemonEvolution.name} key={pokemonEvolution.id}>
                                    <Card key={pokemonEvolution.id} pokemon={pokemonEvolution}/>
                                </Link>
                            ))
                            )
                        }
                    </div>

                    <div className="btn">
                        <BackList/>
                    </div>
                    <Footer/>
                </>
            </div>
        </>
    );
}

export default Show;

