import Head from "next/head"

import SingleMovie from "../../components/SingleMovie/SingleMovie"

const Movie = (props) => {
    return (
        <>
            <Head>
                <title>{props.singleMovie.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <SingleMovie singleMovie={props.singleMovie} />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35523f2ea9e168ee6ffb0f67f498e975`)

    return {
        props: {
            singleMovie: await res.json()
        }
    }

}

export default Movie