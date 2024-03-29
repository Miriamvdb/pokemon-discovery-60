import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "black" }}>◓ Pokemon Discovery ◓</h1>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<PokemonListPage />}>
          <Route path="/:filterInput" element={<PokemonListPage />} />
        </Route>
        <Route path="/details/:pokemonname" element={<PokemonDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
