const reducer = (state, action) => {
    if (action.type === 'SET_POPULAR_API_DATA') {
        return {
            ...state,
            popularMovie: action.payload
        }
    }

    if (action.type === 'SET_LATEST_API_DATA') {
        return {
            ...state,
            latestMovie: action.payload
        }
    }

    if (action.type === 'SET_SINGLE_API_DATA') {
        return {
            ...state,
            singleMovie: action.payload
        }
    }

    if (action.type === 'SET_QUERY') {
        return {
            ...state,
            query: action.payload
        }
    }

    if (action.type === 'SET_SEARCH_MOVIE') {
        return {
            ...state,
            searchMovie: action.payload
        }
    }
}

export default reducer