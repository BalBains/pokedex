import { ChangeEvent, useEffect, useState } from 'react';

import './PokemonSearch.scss';

import { Pokemon } from '../models/pokemon';
import Spinner from './Spinner';
import SearchBox from './SearchBox';
import PokemonCard from './PokemonCard';

interface PokemonSearchProps {
  prevSearchText: string;
  results: Pokemon[];
  loading: boolean;
  searchPokemon: any;
}

function PokemonSearch(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchText && searchText.length >= 3) {
        setLoading(true);
      }
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearchText(value);
  };

  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Pokedex</h1>
          <p className="lead text-muted">Search for a pokemon or type</p>
          <SearchBox text={searchText} searchChanged={handleChange}></SearchBox>
        </div>
      </section>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {pokemon.length === 0 ? (
              <p className="lead text-muted">No results</p>
            ) : loading ? (
              <Spinner />
            ) : (
              pokemon.map((p) => <PokemonCard key={p.id} pokemon={p} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonSearch;
