import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem ('login'));

  const [result,setResult] = useState ([]);
  const [search,setSearch] = useState ("")

  

  return (
    <AppContext.Provider
      value={{
        login,
        result,
        setResult,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
