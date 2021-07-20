import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
const PokedexLazy = lazy(() => import('./components/PokedexApp'));
const PokeAdminLazy = lazy(() => import('./components/PokeAdminApp'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/admin" component={PokeAdminLazy} />
            <Route path="/pokedex" component={PokedexLazy} />
            <Redirect exact from="/" to="/pokedex" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
