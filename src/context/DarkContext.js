import React, { createContext, useEffect, useState } from "react";
import {getInitialMode} from '../helpers/darkMode'


export const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(getInitialMode())
  useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem("dark", dark);
  }, [dark])
  return (
    <DarkContext.Provider value={{dark, setDark}}>
      {children}
    </DarkContext.Provider>
  );
}

export default DarkProvider;