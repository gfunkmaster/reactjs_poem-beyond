import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Favorites = () => {

  const {favorites, removeFavoritePoem} = useGlobalContext();
    console.log(favorites)
  return (
    <div className='content'>
    <div className="title">
      The Poem Story Favorites 
    </div>
    <div className="intro">
    <ul>
    {favorites.map((item) => <div key={item.id}>
      <h3>{item.title}</h3>
      <button onClick={() => removeFavoritePoem(item.id)}>Delete</button>

    </div>
     
      
    )}

    </ul>
    </div>






  </div>


  )
   
}

export default Favorites




/* 

 <div>
    
    {favorites?.map((item) => {
      return (
        <h3>{item}</h3>
      )
    })}
    
    </div>
  )

*/