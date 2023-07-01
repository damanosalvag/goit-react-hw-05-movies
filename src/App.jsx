import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Hola mundo</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        setName(e.target.intro.value);
      }}>
        <label>
          <input name="intro" placeholder="introduce un nombre"></input>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <Routes>
        <Route path="/" element={<Home name={name} />} />
      </Routes>
    </>
  );
}

export default App;
