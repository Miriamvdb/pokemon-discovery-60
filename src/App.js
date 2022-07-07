import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>◓ Pokemon Discovery ◓</h1>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/details/:name" element={<PokemonDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
