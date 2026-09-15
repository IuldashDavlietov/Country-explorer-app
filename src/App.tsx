import './App.css';
import { useFetch } from './hooks/useFetch';
import type { Country } from './types/country.types';

function App() {

const { data } = useFetch<Country[]>('/countries/v5');;

  console.log('DATA:', data);

 return (
    <>
      <h1 className='text-red-600'>Hello TS</h1>
    </>
  )
}
export default App;
