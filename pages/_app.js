import globalstyle from '../styles/globalstyle.scss'

import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="app">
                <Header />
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp