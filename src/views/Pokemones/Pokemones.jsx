import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [idPokemon, setIdPokemon] = useState("");
  const [personajes, setPersonajes] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemones/${idPokemon}`);
  };

  const getData = async () => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=292"
      );
      if (!res.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await res.json();
      const dataOrdenada = data.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPersonajes(dataOrdenada);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedPokemon = personajes.find(
      (pokemon) => pokemon.name === e.target.value
    );

    if (selectedPokemon) {
      const pokemonId = selectedPokemon.url.split("/")[6];
      setIdPokemon(pokemonId);
    }
  };

  return (
    <div className="views">
      <h1>Selecciona un Pokemon:</h1>

      <Form.Select size="lg" onChange={handleSelectChange}>
        <option value="">Seleccione el Pokemon...</option>
        {personajes.map((p) => {
          return (
            <option key={p.url} value={p.name}>
              {p.name.toUpperCase()}
            </option>
          );
        })}
      </Form.Select>
      <Button variant="danger" onClick={handleClick} disabled={!idPokemon}>
        Ver detalle
      </Button>
    </div>
  );
};

export default Pokemones;
