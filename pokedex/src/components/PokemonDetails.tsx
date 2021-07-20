import { useEffect } from 'react';
import { useState } from 'react';
import { match } from 'react-router-dom';
import axios from 'axios';

import { Pokemon } from '../models/pokemon';

interface PokemonDetailsProps {
  match: match<{ id: string }>;
}

function PokemonDetails({ match }: PokemonDetailsProps): JSX.Element {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const callPokemon = async () => {
      const result = await axios.get<Pokemon>(
        `http://localhost:8080/pokemon/${match.params.id}`
      );
      setPokemon(result.data);
    };

    callPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pokemon) {
    return (
      <>
        <section className="jumbotron">
          <div className="container">
            <img
              className="img-fluid"
              src={pokemon.sprites.frontDefault}
              alt={pokemon.name}
            />
            <h1 className="display-4 text-capitalize">
              No.{pokemon.id} {pokemon.name}
            </h1>
            <p className="lead text-muted">{pokemon.species.genus}</p>
          </div>
        </section>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default PokemonDetails;
