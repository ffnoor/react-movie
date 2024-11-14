import Head from 'next/head'

import SearchMovie from '../../components/SearchMovie/SearchMovie'

import { useRouter } from 'next/router'

const Search = (props) => {
    const router = useRouter()
    const query = router.query.query

    return (
        <>
            <Head>
                <title>{`${query}`}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
            </Head>

            <SearchMovie
                searchMovie={props.searchMovie}
                query={query} />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const searchTerm = context.params.query
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=35523f2ea9e168ee6ffb0f67f498e975`)

    return {
        props: {
            searchMovie: await res.json()
        }
    }
}

export default Search