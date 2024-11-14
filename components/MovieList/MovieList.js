import styles from './MovieList.module.scss'

import Link from 'next/link'
import Image from 'next/image'

const MovieList = ({ latestMovie, topRatedMovie }) => {
    return (
        <>
            <p className={styles.latestTitle}>Latest</p>

            <div className={styles.latestContainer}>
                {latestMovie.results.slice(0, 16).map((movie) => {
                    return (
                        <>
                            <Link href={`/movie/${movie.id}`} key={movie.id}
                                style={{ margin: '1rem 0 0 1.2rem' }}>
                                <div className={styles.thumbnail}>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                        alt={movie.title}
                                        width={160}
                                        height={210}
                                    />
                                    <p>{movie.title}</p>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
            <p className={styles.topRatedTitle}>Top Rated</p>

            <div className={styles.topRatedContainer}>
                {topRatedMovie.results.slice(0, 16).map((movie) => {
                    return (
                        <Link href={`/movie/${movie.id}`} key={movie.id}
                            style={{ margin: '0 0 1rem 1.2rem' }}>
                            <div className={styles.thumbnail}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                    width={160}
                                    height={210}
                                />
                                <p>{movie.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div >
        </>
    )
}

export default MovieList