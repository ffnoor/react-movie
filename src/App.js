import React, { Suspense, lazy } from 'react'
import './App.scss'
import { HashRouter, Routes, Route, } from 'react-router-dom'

// component 
import Header from './component/Header'
import Footer from './component/Footer'

// pages 
import Home from './pages/Home'
import { useGlobalContext } from './context/context'
const SingleMovie = lazy(() => import('./pages/SingleMovie'))
const Search = lazy(() => import('./pages/Search'))

function App() {
    const { query, dispatch } = useGlobalContext()
    return (
        <>
            <div className="app">
                <HashRouter>
                    <Header query={query} dispatch={dispatch} />
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path='/movie/:id' element={<SingleMovie />} />
                            <Route path='/search/:routeQuery' element={<Search />} />
                            <Route path='*' element={<h1>Page not found</h1>} />
                        </Routes>
                    </Suspense>
                </HashRouter>
                <Footer />
            </div>
        </>
    )
}
export default App