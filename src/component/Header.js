import React, { memo, useState } from 'react'
import './Header.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { IoSearch } from "react-icons/io5"
import { FaBars } from 'react-icons/fa'

function Header({ query, dispatch }) {
    const [isBarToggle, setIsBarToggle] = useState(false)

    return (
        <>
            <header>
                <nav>
                    <NavLink to='/' style={{ textDecoration: 'none' }} >
                        <div className="logo">
                            <h1>WatchMovie</h1>
                            <p>Watch Your Favourite Movies Online</p>
                        </div>
                    </NavLink>
                </nav>
                <div className={isBarToggle ? 'responsive' : null}>
                    <div className='searchBar'>
                        <input type="text" placeholder='Search..'
                            onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                            value={query}
                        />
                        <NavLink to={`/search/${query}`}>
                            {query.length >= 1 ?
                                <button ><IoSearch /></button>
                                : null}
                        </NavLink>
                    </div>
                </div>

                <div className="hamBurger"
                    onClick={() => setIsBarToggle(!isBarToggle)}>
                    <FaBars />
                </div>
            </header>

            <Outlet />
        </>
    )
}

export default memo(Header)