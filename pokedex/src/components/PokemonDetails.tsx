import { useEffect } from 'react';
import { useState } from 'react';
import { match } from 'react-router-dom';

import { Pokemon } from '../models/pokemon';

interface PokemonDetailsProps {
  match: match<{ id: string }>;
}

function PokemonDetails({ match }: PokemonDetailsProps): JSX.Element {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {}, []);

  return (
    <>
      <section className="jumbotron">
        <div className="container">
          <img
            className="img-fluid"
            src={pokemon!.sprites.frontDefault}
            alt={pokemon!.name}
          />
          <h1 className="display-4 text-capitalize">
            No.{pokemon!.id} {pokemon!.name}
          </h1>
          <p className="lead text-muted">{pokemon!.species.genus}</p>
        </div>
      </section>
    </>
  );
}

export default PokemonDetails;
