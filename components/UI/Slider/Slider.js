import styles from './Slider.module.scss'

import Link from 'next/link'
import Image from 'next/image'

// carousel imports 
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Slider = ({ sliderMovie }) => {
    return (
        <>
            <section className={styles.carouselPoster}>
                <Carousel className={styles.carousel}
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                >
                    {sliderMovie.results.slice(0, 5).map((movie) => {
                        return (
                            <Link href={`/movie/${movie.id}`} key={movie.id}>
                                <div className={styles.posterImage}>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        width={1200}
                                        height={400}
                                        alt={movie.title}
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </Carousel>
            </section >
        </>
    )
}

export default Slider