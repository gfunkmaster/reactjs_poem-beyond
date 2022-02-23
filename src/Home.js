import React, { useState } from 'react'
import { useGlobalContext } from './context'
import PoemDetails from './PoemDetails';
import Favorites from './Favorites';
import Accordion from './Accordion';
import { v4 as uuid } from 'uuid';

const Home = () => {

  const uniqueId = uuid();

  const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9)

  console.log(keyGenerator())

    const {poems, fetchProduct, sortedPoems, setSortBy, sortBy, loading, showDetails,setShowDetails,addFavoritePoems} = useGlobalContext();

    console.log(showDetails);


  return (
    <>

    <div className='content'>
      <div className="title">
        The Poem Story
      </div>
      <div className="intro">
      <button className='buttonFetch' onClick={fetchProduct}>Fetch Poems</button>
      <div className="dropdown-container">
           
                <select className='sort-dropdown'
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                >
                    <option value="author">Author</option>
                    <option value="title">Title</option>

                </select>
            </div>

      </div>


      {!loading ? (sortedPoems.map((poem) => {
      return (
        <Accordion {...poem}  key={keyGenerator()} />
      )
    } )): (
      <div className='loading'>
              <h2>Loading</h2>
      </div>
  )
  } 



    </div>



    {/* <div className="container">
      <div className="fetch-container">
        <div className='buttonFetch' onClick={fetchProduct}>Fetch Poems</div>
      </div>

      
      <div className="dropdown-container">
                <p className="sort-title">Sort by:</p>
                <select className='sort-dropdown'
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                >
                    <option value="author">Author</option>
                    <option value="title">Title</option>

                </select>
            </div>
    </div>

    {!loading ? (sortedPoems.map((poem) => {
      return (
        <Accordion {...poem}    />
      )
    } )): (
      <div className='loading'>
              <h2>Loading</h2>
      </div>
  )
  } */}
    </>
  )
}

export default Home



/* 


 {poems?.map((item) => {
        const {author, title} = item;
        console.log(author, title);
        return (
            <div>
                {author}
                <p>{title}</p>
            </div>
        )
    })}

*/