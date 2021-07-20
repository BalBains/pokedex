import { History } from 'history';

interface AppProps {
  history: History<any>;
}

function App({ history }: AppProps) {
  return <div>Poke Admin</div>;
}

export default App;
