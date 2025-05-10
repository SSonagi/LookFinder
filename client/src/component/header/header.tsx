import React from 'react';
import './header.css';
import Logo from '../../images/Logo.png'

const Header = () => {
    return (
        <header className='header'>
            <a href="/" className='link'>
                <img className='title' src={Logo} width={266} height={50} alt='LookFinder'/>
            </a>
            <nav className='nav'>
                <a href="/outfits" className='link'>Your Looks</a>
                <a href="/builder" className='link'>Look Builder</a>
            </nav>
        </header>
    );
};

export default Header;