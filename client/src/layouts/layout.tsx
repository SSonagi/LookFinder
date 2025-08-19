import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../images/Logo.png';
import { useAuth } from '../contexts/AuthContext';

function Layout() {
  const { isSignedIn } = useAuth();
  return (
    <div className="h-screen bg-[#F7F7F7] flex flex-col justify-start align-middle">
      {/* Header */}
      <header className="flex flex-row justify-between align-middle px-12 py-4 border-b-2 border-[#443627]/20">
        <a href="/">
          <img className="m-0" src={Logo} width={266} height={50} alt="LookFinder" />
        </a>
        <nav className="flex flex-row items-center gap-16 px-10">
          {[
            ['Your Looks', '/outfits/0'],
            ['Look Builder', '/builder/0'],
            ['About', '/about'],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="font-RobotoSlab font-normal text-xl text-[#443627] hover:bg-slate-100 hover:text-[#D98324]"
            >
              {title}
            </a>
          ))}
          {isSignedIn ? 
            'Signed In' 
            : 
            <a
              href={'/signin'}
              className="font-RobotoSlab font-normal text-xl text-[#443627] hover:bg-slate-100 hover:text-[#D98324]"
            >
              Sign in/Register
            </a>
          }
        </nav>
      </header>
      {/* Main */}
      <main className="font-Roboto text-primary font-normal text-lg px-10">
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
}

export default Layout;
