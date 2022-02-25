import React, { useState } from 'react'
import { useGlobalContext } from './context'

import Accordion from './Accordion';


const Home = () => {

  

    const {fetchProduct, sortedPoems, setSortBy, sortBy, loading} = useGlobalContext();

    //console.log(showDetails);


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
       // console.log(poem)
        const sortedPoemArray = poem;
      return (
        <Accordion  {...sortedPoemArray}  key={poem.id} />
      )
    } )): (
      <div className='loading'>
              <h2>Loading</h2>
      </div>
  )
  } 



    </div>


    </>
  )
}

export default Home



