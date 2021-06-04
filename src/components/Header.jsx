import React from 'react'
import Logo from '../images/Covid.svg';
const Header = () => {
    return (
        <header className = "header">
        <div className = "head__wrapper">
        <span>C</span><span><img src = {Logo}/></span><span>VID19 STATS</span>
        </div>
        </header>
    )
}

export default Header
