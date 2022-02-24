import React, { useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from 'uuid';
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

 

const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9)

/*  const addID = () => {

} */


const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

    //fetch Products
    const fetchProduct = async () => {
        setLoading(true)
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
          
          
          setPoems(addId)

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

 /*  useEffect(() => {
    addID();
  }) */

  //useEffect
  useEffect(() => {
    fetchProduct(url); 
    
}, []) 


//useEffect
useEffect(() => {
  //key value
  localStorage.setItem('poems', JSON.stringify(poems));
}, [poems])

/* useEffect(() => {
    const poemFavorites = JSON.parse(localStorage.getItem('poem-favorites'))
    setFavorites(poemFavorites);
}, [])
 */
//Locale storage
//local storage and getting the list
const getLocalStorage = () => {
  let list = localStorage.getItem('poems');
  if(list){
    return JSON.parse(localStorage.getItem('poems'));
  } else {
    return [];
  }
}

//add to favorites
const addFavoritePoems = (poem, id) => {

const newPoem = {
  id: id,
  title: poem
}

setFavorites([...favorites].concat(newPoem))

    console.log('added')
    setIsActive(true);
  //  saveToLocaleStorage(newFavoritesList);
}

//remove favorites

const removeFavoritePoem = (poemId) => {
 const updatedPoems = [...favorites].filter((item) => item.id !== poemId);
 setFavorites(updatedPoems)
  console.log('deleted')
   // saveToLocaleStorage(newFavoritesList);
}

  return <AppContext.Provider value={{poems, fetchProduct, sortedPoems, setSortBy, sortBy, loading, showDetails, setShowDetails,favorites ,setFavorites, addFavoritePoems, removeFavoritePoem,isActive, setIsActive}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };