import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { Pokemon } from '../models/pokemon';
import Spinner from './Spinner';
import SearchBox from './SearchBox';
import PokemonCard from './PokemonCard';

function PokemonSearch(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchText && searchText.length >= 3) {
        setLoading(true);

        const url = `http://localhost:8080/pokemon?searchText=${searchText}`;
        axios.get<Pokemon[]>(url).then((results) => {
          setPokemon(results.data);
          setLoading(false);
        });
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
            {loading && <Spinner />}
            {pokemon.length === 0 ? (
              <p className="lead text-muted">No results</p>
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
