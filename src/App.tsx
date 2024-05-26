import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.scss';
import { MainRouter } from './Routes/MainRouter';
import { GlobalStateProvider } from './store/context/globalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
         <MainRouter />
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
