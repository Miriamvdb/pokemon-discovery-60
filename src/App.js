import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonListPage from "./pages/PokemonsListPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>◓ Pokemon Discovery ◓</h1>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
      </Routes>
    </div>
  );
}

export default App;
