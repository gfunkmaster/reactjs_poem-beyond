import React, { useState } from 'react'
import { useGlobalContext } from './context'


const PoemDetails = (poem) => {
    const {favorites, setFavorites, addFavoritePoems, removeFavoritePoem} = useGlobalContext();


  return (
    
        <div className="accordion-item-body-content">
           <div className="accordion-item-title">
            {/* <span>Poem: {title}</span>  */}
           
          <div className="accordian-item-middle">
          <div> 
            <span className='middle'>Poem: {poem.title}</span>
            <span className='middle'>Author: {poem.author}</span>
           </div> 
          
          {/* adding and delete buttons */}
          <div className='btn-list middle'>
            <button onClick={() =>addFavoritePoems(poem.title, poem.id)}>Add</button>
            <button onClick={() =>removeFavoritePoem(poem.id)}>Delete</button>
            </div>
          </div>
            {/* line break */}
            <br></br>
          </div>
          {/* mapping throgh, to get the lines */}
          {poem.lines?.map((line,index) => {
           // console.log(line)
          return (
            <small   key={index} className='poem-text'>{`${line} `}</small>
          )
        })}

        </div>


      

  )
}

export default PoemDetails



/* 

 {isOpen? line.slice(0, line) : line}
                <span onClick={toggle}>
                  {isOpen? '...Show More': '...Show Less'}
                </span>
  {lines?.map((line) => {
            console.log(line)
          return (
            <p>{line}</p>
          )
        })}


  <div>Title:  
          {title}

          
          <button onClick={() => addFavoritePoems(title)}>Add to Favorites</button>
          <button onClick={() => removeFavoritePoem(title)}>Delete from Favorites</button>
        </div>
        <p>Author: {author}</p>
        {lines?.map((line) => {
          return (
            <p>{line}</p>
          )
        })}


*/


{/*   <div class="accordion-item">
    <div id="test" class="accordion-item-header"  onClick={() => setIsActive(!isActive)}>
      <div class="accordion-item-title">{title}</div>
<div>{isActive ? '-' : '+'}</div>
    </div>
   {isActive&& 
      
      <PoemDetails title={title} author={author} lines={lines}  index={index} />
    
    }
  </div>
  <div class="divider"></div> */}