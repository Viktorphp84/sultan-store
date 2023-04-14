import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { SortContextProvider } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SortContextProvider>
    <App />
  </SortContextProvider>
);

