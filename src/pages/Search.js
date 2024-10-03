import React, { useEffect } from 'react'
import './Search.scss'
import { useGlobalContext } from '../context/context'
import { NavLink, useParams } from 'react-router-dom'

function Search() {
    const { routeQuery } = useParams()
    const { getSearchMovie, searchMovie } = useGlobalContext()

    useEffect(() => {
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?query=${routeQuery}&api_key=35523f2ea9e168ee6ffb0f67f498e975`)
    }, [routeQuery])

    return (
        <>
            <div className="search">
                <p className='searchTitle'>{`Search result for : ${routeQuery}`}</p>
                <div className="flex">
                    {searchMovie.map((movie) => {
                        return (
                            <>
                                <NavLink to={`/movie/${movie.id}`}
                                    style={{ margin: '1rem 0 0 1.2rem' }}>
                                    <div className='thumbnail' key={movie.id}>
                                        {movie.poster_path &&
                                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.poster_path ? movie.title : null}
                                                loading='lazy' width='140px' height='200px' />
                                        }
                                        <p>{movie.poster_path ? movie.title : null}</p>
                                    </div>
                                </NavLink>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Search