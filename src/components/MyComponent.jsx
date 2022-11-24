import {
    useContext,
} from "react"

// Contexts
import DataContext from "../context/DataContext";

function MyComponent() {
    const pokemonData = useContext(DataContext);

    return (
        <>
            <h1>{pokemonData && pokemonData.name}</h1>
            {
                (pokemonData && pokemonData.sprites.front_default)
                &&
                <img src={pokemonData.sprites.front_default} alt="" />
            }
        </>
    )
};

export default MyComponent;