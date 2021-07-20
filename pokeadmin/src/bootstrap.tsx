import ReactDOM from 'react-dom';
import {
  createBrowserHistory,
  createMemoryHistory,
  History,
  LocationListener,
  LocationState,
} from 'history';

import App from './App';

interface AppConfig {
  onNavigate?: LocationListener<LocationState>;
  initialPath?: string;
  defaultHistory: History<any> | undefined;
}

export const mount = (
  el: Element,
  { onNavigate, defaultHistory, initialPath = '' }: AppConfig
) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_admin-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
