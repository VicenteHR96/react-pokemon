import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PokemonContextProvider from "./contexts/PokemonContext/PokemonContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonContextProvider>
  </React.StrictMode>
);
