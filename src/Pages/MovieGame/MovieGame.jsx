import { useState, useEffect } from 'react'
import './MovieGame.css'
import MovieSearch from './MovieSearch/MovieSearch'
import MovieInfo from './MovieInfo/MovieInfo'


function MovieGame() {
  const [movieData, setMovieData] = useState({})
  const [movieTitle, setMovieTitle] = useState('Star Wars')

  function getSearchTerm(searchTitle){
    console.log(searchTitle, ' <- app.js searchtitle')
    setMovieTitle(searchTitle)
  }

  useEffect(() => {

    const apiEndPoint = `https://www.omdbapi.com/?apikey=98e3fb1f&t=${movieTitle}`

    
    async function getMovie(){
      try {
        // by default fetch makes http get requests, to some endpoint
        const response = await fetch(apiEndPoint)
        // we have to change the response from json into a javascript object!
        const data = await response.json(); // <- .json() method comes from fetch

        setMovieData(data)

      } catch(err){
        console.log(err)
      }
    }

    // Don't forget to call the function
    getMovie()

    console.log('useEffect is running')
  }, [movieTitle]); // Empty dependency array means call the effect once when the components loads onto the dom!

  return (
    <>
   
      <MovieSearch getSearchTerm={getSearchTerm}/>
      <MovieInfo movie={movieData} />
    </>
  )
}

export default MovieGame
