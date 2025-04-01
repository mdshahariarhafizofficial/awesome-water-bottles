import { Suspense } from 'react';
import './App.css'
import Bottles from './Components/Bottles/Bottles';

const bottleFetch = fetch('../public/bottles.json')
  .then(res => res.json());

function App() {

  return (
    <>
      <h1>Water Bottle</h1>
      <Suspense fallback = {<h2>Bottles is Loading....</h2>}>
        <Bottles bottleFetch = {bottleFetch}></Bottles>
      </Suspense>
    </>
  )
}

export default App
