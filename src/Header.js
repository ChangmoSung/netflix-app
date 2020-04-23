import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='top-header'>
            <h1>HackFlix</h1>
            <nav>
                <Link to='/'>Catalogue</Link>
            </nav>
        </header>
    )
}

export default Header;