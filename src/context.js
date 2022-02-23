import React, { useContext, useEffect, useMemo, useState } from "react";
export const url = "https://poetrydb.org/random/20";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //setting up state values
  const [poems, setPoems] = useState([]);
  const [sortBy, setSortBy] = useState('author');
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [favorites, setFavorites] = useState([]);

 /* 
console.log(poems) */

    //fetch Products
    const fetchProduct = async () => {
        setLoading(true)
      try {

          const resp = await fetch(url);
          const data = await resp.json();
          setPoems(data);
          console.log(data)
          setLoading(false);

      } catch (error) {
          console.log(error);
      }
  }
//sort poems
  const sortedPoems = useMemo(
    () => poems.sort((a, b) => a[sortBy].localeCompare(b[sortBy])),
    [poems, sortBy],
  )

  //useEffect
  useEffect(() => {
    fetchProduct(url); 
}, []) 

/* useEffect(() => {
    const poemFavorites = JSON.parse(localStorage.getItem('poem-favorites'))
    setFavorites(poemFavorites);
}, [])
 */
//Locale storage
const saveToLocaleStorage = (items) => {
    localStorage.setItem('poem-favorites', JSON.stringify(items))
}


//add to favorites
const addFavoritePoems = (poem) => {
    const newFavoritesList = [...favorites, poem]
    console.log(newFavoritesList)
    setFavorites(newFavoritesList);
    setIsActive(true);
    saveToLocaleStorage(newFavoritesList);
}

//remove favorites

const removeFavoritePoem = (poem) => {
    const newFavoritesList = favorites.filter((item) => item !== poem)
    setFavorites(newFavoritesList);
    console.log(newFavoritesList)
    setIsActive(false);
    saveToLocaleStorage(newFavoritesList);
}

  return <AppContext.Provider value={{poems, fetchProduct, sortedPoems, setSortBy, sortBy, loading, showDetails, setShowDetails,favorites ,setFavorites, addFavoritePoems, removeFavoritePoem,isActive, setIsActive}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };