import Head from "next/head"

import MovieList from "../components/MovieList/MovieList"
import Slider from "../components/UI/Slider/Slider"

const Home = (props) => {
    return (
        <>
            <Head>
                <title>WatchMovie</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <Slider sliderMovie={props.latestMovie} />

            <MovieList
                latestMovie={props.latestMovie}
                topRatedMovie={props.topRatedMovie}
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const [latestMovieRes, topRatedMovieRes] = await Promise.all([
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=35523f2ea9e168ee6ffb0f67f498e975'),

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63')
    ])

    const [latestMovie, topRatedMovie] = await Promise.all([
        latestMovieRes.json(),
        topRatedMovieRes.json()
    ])

    return {
        props: {
            latestMovie,
            topRatedMovie
        }
    }
}
export default Home