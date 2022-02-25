import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useGlobalContext } from './context'
import { BsTrash } from "react-icons/bs";

const Favorites = () => {

  const {favorites, removeFavoritePoem} = useGlobalContext();
    console.log(favorites)
  return (
    <div className='content'>
    <div className="title">
      The Poem Story Favorites 
    </div>
    <div className="intro">
    <ul className='favorites'>
    {favorites.map((item) => <div key={item.id}>


     <li className='favorites-li'>
     <div className='flex'>
       <small style={{ display: "inline",
       marginBottom: "1rem"

      }}>{item.title}</small>
      <span style={{ display: "inline"}} onClick={() => removeFavoritePoem(item.id)}> <BsTrash className='trash' /></span>
     </div>
     </li>

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