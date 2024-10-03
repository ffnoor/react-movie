import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MovieProvider } from './context/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <MovieProvider>
        <App />
    </MovieProvider>
)