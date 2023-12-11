import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Card } from "react-bootstrap";

const Detalle = () => {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      const data = await res.json();
      console.log(data);
      setPokemon(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="views">
      <Card>
        <div className="poke-name">
          <h2>{pokemon.name && pokemon.name.toUpperCase()}</h2>
        </div>
        <div className="detalle">
          <div className="img-detalle">
            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              pokemon.sprites && (
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  onLoad={() => setLoading(false)}
                />
              )
            )}
          </div>
          <div className="contenido">
            {pokemon.stats &&
              pokemon.stats.map((statPokemon) => (
                <div key={statPokemon.stat.name} className="stats">
                  <div>
                    <img
                      src="https://static-00.iconduck.com/assets.00/pokemon-icon-512x512-ivi5uex5.png"
                      alt="pokemon icon"
                      title="pokemon icon"
                      className="img-deco"
                    />
                  </div>
                  <div>
                    <p>
                      {statPokemon.stat.name.toUpperCase()}:{" "}
                      {statPokemon.base_stat}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Detalle;
