import styles from './SearchMovie.module.scss'

import Image from 'next/image'
import Link from 'next/link'

const SearchMovie = ({ searchMovie, query }) => {
    return (
        <>
            <div className={styles.search}>
                <p className={styles.searchTitle}>{`Search result for : ${query}`}</p>
                <div className={styles.flex}>
                    {searchMovie.results.map((movie) => {
                        return (
                            <>
                                <Link href={`/movie/${movie.id}`}
                                    style={{ margin: '1rem 0 0 1.2rem' }}>
                                    <div className={styles.thumbnail}>
                                        {movie.poster_path ?
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                                alt={movie.title}
                                                width={140}
                                                height={210}
                                            />
                                            : null}
                                        <p>{movie.poster_path ? movie.title : null}</p>
                                    </div>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SearchMovie