import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CountryProvider } from './context/CountryProvider';
import ThemeProvider from './context/ThemeProvider';
import Approuter from './router/Approuter';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CountryProvider>
          <Approuter />
        </CountryProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App;
