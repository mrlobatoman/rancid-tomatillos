import React from 'react'


const SingleMovie = (filteredMovie) => {
  return (
    <div className='single-movie' >
      <img className='single-poster' src={filteredMovie.filteredMovie[0].backdrop_path} ></img>
      <div className='text-details'>
        <p>{filteredMovie.filteredMovie[0].title}</p>
        <p>{filteredMovie.filteredMovie[0].average_rating}</p>
        <button className='return-button'>Return</button>
      </div>
    </div>
  )
}

export default SingleMovie;