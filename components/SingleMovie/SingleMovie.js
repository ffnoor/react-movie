import styles from './SingleMovie.module.scss'

import Image from 'next/image'

const SingleMovie = ({ singleMovie }) => {
    const {
        backdrop_path,
        poster_path,
        original_title,
        overview,
        genres,
    } = singleMovie
    return (
        <>
            <section className={styles.singleMovie}>

                <div className={styles.poster}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt={original_title}
                        width={1000}
                        height={300}
                    />
                    <div className={styles.details}>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            alt={original_title}
                            width={240}
                            height={170}
                        />
                        <div className={styles.description}>
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

            </section >
        </>
    )
}

export default SingleMovie