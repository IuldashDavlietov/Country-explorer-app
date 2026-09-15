import './App.css';
import { CountryProvider } from './context/CountryProvider';
import Approuter from './router/Approuter';


function App() {
  return (
      <CountryProvider>
        <Approuter />
      </CountryProvider>
  )
}
export default App;
