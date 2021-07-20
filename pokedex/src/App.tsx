import { History } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import './App.css';
import PokemonDetails from './components/PokemonDetails';
import PokemonSearch from './components/PokemonSearch';

interface AppProps {
  history: History<any>;
}

function App({ history }: AppProps) {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/pokedex" exact component={PokemonSearch} />
          <Route path="/pokedex/:id" component={PokemonDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
