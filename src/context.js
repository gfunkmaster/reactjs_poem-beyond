import React, { useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
export const url = "https://poetrydb.org/random/20";
const AppContext = React.createContext();

const getLocalStorage = () => {
  let poems = localStorage.getItem("poems");
  if (poems) {
    
    return JSON.parse(localStorage.getItem("poems"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  //setting up state values
  const [poems, setPoems] = useState(getLocalStorage());
  const [sortBy, setSortBy] = useState("author");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [favorites, setFavorites] = useState([]);

  //fetch Products
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      //adding id to API, to easier remove or add things later on
      const addId = data.map((item) => {
        return {
          ...item,
          id: uuid(),
        };
      });
      setPoems(addId);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //sort poems
  const sortedPoems = useMemo(
    () => poems.sort((a, b) => a[sortBy].localeCompare(b[sortBy])),
    [poems, sortBy]
  );

  //useEffect
  useEffect(() => {
    fetchProduct(url);
  }, []);

  //useEffect
  useEffect(() => {
    //key value
    localStorage.setItem("poems", JSON.stringify(poems));
  }, [poems]);


  //check if it exist with id
  const check = (arr, obj) => {
    return arr.filter((arrVal) => obj.id !== arrVal.id)
  }

  //add to favorites
  const addFavoritePoems = (poem, id) => {
    const newPoem = {
      id: id,
      title: poem,
    };

    const poemToSend = check(favorites, newPoem)
    
    setFavorites([...poemToSend].concat(newPoem));
    console.log("added");
    setIsActive(true);
  };

  //remove favorites

  const removeFavoritePoem = (poemId) => {
    const updatedPoems = [...favorites].filter((item) => item.id !== poemId);
    setFavorites(updatedPoems);
    console.log("deleted");
  };

  return (
    <AppContext.Provider
      value={{
        poems,
        fetchProduct,
        sortedPoems,
        setSortBy,
        sortBy,
        loading,
        showDetails,
        setShowDetails,
        favorites,
        setFavorites,
        addFavoritePoems,
        removeFavoritePoem,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
