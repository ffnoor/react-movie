import React, { memo, useEffect } from 'react'
import './SingleMovie.scss'
import { useGlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import NavigateBtn from '../component/NavigateBtn'

function SingleMovie() {
  const { id } = useParams()
  const { singleMovie, getSingleMovie } = useGlobalContext()

  useEffect(() => {
    getSingleMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=35523f2ea9e168ee6ffb0f67f498e975`)
  }, [id])

  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    genres,
  } = singleMovie

  return (
    <>

      <NavigateBtn />
      <section className="singleMovie">
        <div className="poster">
          <div className="flex">
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} />
            <div className='details'>
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} />
              <div className="description">
                <h2>{original_title}</h2>
                <i><p>{overview}</p></i>
                <p>Genre:</p>
                {genres?.map((genre) => {
                  return (
                    <>
                      <span> {genre.name}, </span>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(SingleMovie)