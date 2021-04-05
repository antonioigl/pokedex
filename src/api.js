export const getPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemonEvolutions = async (speciesUrl) => {
    try {
        const species = await fetch(speciesUrl);
        const speciesData = await species.json();
        const evolutionChain = await fetch(speciesData.evolution_chain.url);
        const evolutionChainData = await evolutionChain.json();
        const pokemonEvolutionList = makePokemonEvolutionList(evolutionChainData);

        if (pokemonEvolutionList.length === 1){
            return [];
        }

        const promises = pokemonEvolutionList.map(async (pokemon) => {
            return await getPokemon(pokemon.name);
        });

        const results = await Promise.all(promises);
        return results;
    } catch (err) {}
};

const depthFirst = (getChildren) => (node) =>
    [
        node,
        ...(getChildren (node) || []).flatMap (depthFirst(getChildren)),
    ]

const makePokemonEvolutionList = (pokemons) =>
    depthFirst (node => node.evolves_to)(pokemons.chain).map(({species}) => species)
