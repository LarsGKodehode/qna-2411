// Libraries
import {
  useEffect,
  useState,
} from "react"

// Context
import DataContext from "./context/DataContext";

// Components
import MyComponent from "./components/MyComponent";

function changePokemon(step, callback) {
  callback((oldId) => oldId + step);
};

function App() {
  const [ state, setState ] = useState(null);
  const [ pokemonId, setPokemonID ] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if(!response.ok) {
        console.warn(response.status);
        console.warn("Server responded with error");
        return;
      }
      const data = await response.json();

      setState(data);
    };

    fetchData();
  }, [pokemonId]);

  return (
    <>
      <DataContext.Provider value={state}>
        <button onClick={() => changePokemon(-1, setPokemonID)}>Prev</button>
        <button onClick={() => changePokemon(+1, setPokemonID)}>Next</button>

        <MyComponent />
      </DataContext.Provider>
    </>
  );
};

export default App;