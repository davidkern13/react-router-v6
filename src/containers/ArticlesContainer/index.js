import React, { useEffect } from 'react';
import { useGetPokemonByNameQuery } from '../../store/services/pokemon';

function Articles() {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

    useEffect(() => {
        first();

        console.log("data: ", data);
        console.log("error: ", error);
        console.log("isLoading: ", isLoading);


        return () => {
            first();
        };
    }, [data, error, isLoading]);

    const first = (second) => {
        console.log("Article: ");
    };

    return (
        <>
            <h1>Articles</h1>

            <ul>
                {!isLoading &&
                    data.results.map((pokemon, idx) => {
                        return (
                            <li key={idx}>
                                <figure>
                                    <img alt={`pokemon ` + pokemon.name} src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}/>
                                    <figcaption>{pokemon.name}</figcaption>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    );
}

export default Articles;
