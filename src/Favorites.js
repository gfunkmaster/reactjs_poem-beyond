import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Favorites = () => {

  const {favorites} = useGlobalContext();
  return (
    <div className='content'>
    <div className="title">
      The Poem Story Favorites 
    </div>
    <div className="intro">
    <ul>
    {favorites?.map((item) => {
      return (
        <li>{item}</li>
      )
    })}

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