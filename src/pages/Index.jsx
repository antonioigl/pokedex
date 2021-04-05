import React, {useState, useEffect} from 'react';
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import {getPokemon, getPokemons} from "../api";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import '../assets/styles/Styles.scss'

const Index = () => {

    const [pokemos, setPokemons] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchPokemons() {
            setLoading(true);
            const data = await getPokemons(currentPageUrl);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemon(pokemon.name);
            });
            const results = await Promise.all(promises);
            setLoading(false);
            setNextPageUrl(data.next)
            setPokemons((prev) => [...prev, ...results]);
        }

        fetchPokemons();

    }, [currentPageUrl]);

    function gotoNextPage()
    {
        setCurrentPageUrl(nextPageUrl);
    }

    return (
        <>
            <Navbar title={''} />
            <div>
                <>
                    <div className="grid-container">
                        {
                            pokemos.map((pokemon) => (
                                <Link to={`/pokedex/${pokemon.id}`} style={{ textDecoration: 'none'}} title={pokemon.name} key={pokemon.id}>
                                    <Card key={pokemon.id} pokemon={pokemon} style={{ cursor: 'pointer'}}/>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="btn">
                        { loading ?  <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
                            <Pagination
                                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                            />
                        )}
                    </div>
                    <Footer/>
                </>
            </div>
        </>
    );
};

export default Index;