import React from 'react'
import './NavigateBtn.scss'
import { NavLink } from 'react-router-dom'

function NavigateBtn() {
    return (
        <NavLink to='/'
            style={{ width: 'fit-content', margin: '1rem 2.4rem' }}>
            <button className="NavigateBtn">Home /</button>
        </NavLink>
    )
}
export default NavigateBtn