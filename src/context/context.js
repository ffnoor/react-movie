import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer
} from "react"

import reducer from "../reducer/reducer"
import axios from "axios"

const MovieContext = createContext()

const initialState = {
    popularMovie: [],
    latestMovie: [],
    singleMovie: {},
    query: '',
    searchMovie: []
}

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPopularMovie = useCallback(async () => {
        const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=35523f2ea9e168ee6ffb0f67f498e975'
        let res = await axios.get(API_URL)
        let data = await res.data.results
        dispatch({ type: 'SET_POPULAR_API_DATA', payload: data })
    }, [])

    const getLatestMovie = useCallback(async () => {
        const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=35523f2ea9e168ee6ffb0f67f498e975'
        let res = await axios.get(API_URL)
        let data = await res.data.results
        dispatch({ type: 'SET_LATEST_API_DATA', payload: data })
    }, [])

    // fetching by id for single movie data
    // and the function will be call in singleMovie page
    const getSingleMovie = useCallback(async (API_URL) => {
        const res = await axios.get(API_URL)
        const data = await res.data
        dispatch({ type: 'SET_SINGLE_API_DATA', payload: data })
    }, [])

    const getSearchMovie = async (url) => {
        const res = await axios.get(url)
        const data = await res.data.results
        dispatch({ type: 'SET_SEARCH_MOVIE', payload: data })

        // empty the query after calling search function 
        dispatch({ type: 'SET_QUERY', payload: '' })
    }

    return (
        <MovieContext.Provider value={({
            ...state,
            dispatch,
            getPopularMovie,
            getLatestMovie,
            getSearchMovie,
            getSingleMovie
        })}>
            {children}
        </MovieContext.Provider>
    )
}

// custom provider hook 
const useGlobalContext = () => {
    return useContext(MovieContext)
}

export { MovieProvider, useGlobalContext }