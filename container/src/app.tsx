import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const PokedexLazy = lazy(() => import('./components/PokedexApp'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" component={PokedexLazy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
