import { createContext } from "react";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const value = { sdfa: "asd" };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
