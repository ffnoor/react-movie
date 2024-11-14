import { useState } from 'react'

import styles from './Header.module.scss'

import { IoSearch } from 'react-icons/io5'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const [query, setQuery] = useState('')
    const [isToggle, setIsToggle] = useState(false)

    return (
        <header className={styles.header}>
            <nav>
                <Link href='/' style={{ textDecoration: 'none' }}>
                    <div className={styles.logo}>
                        <h1>WatchMovie</h1>
                        <p>Watch Your Favourite Movies Online</p>
                    </div>
                </Link>
            </nav>

            <div className={isToggle ? styles.responsive : null}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder='Search..'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <Link href={`/search/${query}`}>
                        <button ><IoSearch /></button>
                    </Link>
                </div>
            </div>

            <div className={styles.hamBurger} onClick={() => setIsToggle(!isToggle)}>
                <FaBars />
            </div>
        </header>
    )
}

export default Header