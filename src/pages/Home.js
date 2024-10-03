import React, { memo } from 'react'
import './Home.scss'
import { useGlobalContext } from '../context/context'
import { Link } from 'react-router-dom'
import MovieList from '../component/MovieList'

// carousel import 
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Home() {
    const { popularMovie, latestMovie, getPopularMovie, getLatestMovie } = useGlobalContext()
    const carouselMovie = popularMovie.slice(0, 5)
    return (
        <>
            <section className="carouselPoster">
                <Carousel className='carousel'
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                >
                    {carouselMovie.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </section>

            <MovieList
                getPopularMovie={getPopularMovie}
                getLatestMovie={getLatestMovie}
                popularMovie={popularMovie}
                latestMovie={latestMovie}
            />
        </>
    )
}

export default memo(Home)