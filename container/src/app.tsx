import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
