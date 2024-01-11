import { createContext, useState } from "react";
import propTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);

  const value = {
    movie,
    setMovie,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;

AppContext.propTypes = {
  children: propTypes.any,
}.isRequired;
