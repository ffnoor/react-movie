import React, { memo, useEffect } from 'react'
import './MovieList.scss'
import { NavLink } from 'react-router-dom'

function MovieList({ getPopularMovie, getLatestMovie, popularMovie, latestMovie }) {
    useEffect(() => {
        getPopularMovie()
        getLatestMovie()
    }, [])

    // slicing arrays 
    const newPopularMovie = popularMovie.slice(0, 16)
    const newLatestMovie = latestMovie.slice(0, 16)

    return (
        <>
            <div className="popular">
                <p className='popularTitle'>Popular</p>
                <div className="flex">
                    {
                        newPopularMovie.map((movie) => {
                            return (
                                <>
                                    <NavLink to={`/movie/${movie.id}`}
                                        style={{ margin: '1rem 0 0 1.2rem' }}>
                                        <div className='thumbnail' key={movie.id}>
                                            <img className='img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}
                                                loading='lazy' width='140px' height='210px' />
                                            <p className='p'>{movie.title}</p>
                                        </div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="latest">
                <p className='latestTitle'>Latest Movies</p>
                <div className="flex">
                    {
                        newLatestMovie.map((movie) => {
                            return (
                                <>
                                    <NavLink to={`/movie/${movie.id}`}
                                        style={{ margin: '0 0 1rem 1.2rem' }}>
                                        <div className='thumbnail' key={movie.id}>
                                            <img className='img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title}
                                                loading='lazy' width='140px' height='210px' />
                                            <p className='p'>{movie.original_title}</p>
                                        </div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default memo(MovieList)