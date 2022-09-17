import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const URL = "https://www.reddit.com/r/pics/.json?jsonp=";
  useEffect(() => {
    (async () => {
      const response = await axios.get(URL);

      const { data } = response.data;

      const { children } = data;

      setApiData(children);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ apiData }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
