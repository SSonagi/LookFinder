import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../images/Logo.png';

function Layout() {
  return (
    <div>
      <header className='header'>
            <a href="/" className='link'>
                <img className='title' src={Logo} width={266} height={50} alt='LookFinder'/>
            </a>
            <nav className='nav roboto-slab'>
                <a href="/outfits" className='link'>Your Looks</a>
                <a href="/builder" className='link'>Look Builder</a>
                <a href="/profile" className='link'>Profile</a>
            </nav>
        </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;