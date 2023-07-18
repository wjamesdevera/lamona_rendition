import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? 'text-main' : 'text-[#787877]';
    }
  return (
    <header className='sticky z-10 left-0 bg-bg-color'>
        <nav className='flex justify-between items-end py-5 px-[5vw]'>
            <a href="/" className='xl:text-4xl text-xl font-paytone-one text-main'>
                lamona
            </a>
            <div className="">
                <ul className='xl:flex hidden gap-[90px] text-xl font-raleway font-extrabold text-[#787877]'>
                    <li>
                        <NavLink to="/" className={`hover:text-main ${isActive('/')}`}>
                            HOME 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={`hover:text-main ${isActive('/about')}`}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/directory" className={`hover:text-main ${isActive('/directory')}`}>
                            DIRECTORY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={`hover:text-main ${isActive('/favorites')}`}>
                            FAVORITES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/choose" className={`hover:text-main ${isActive('/choose')}`}>
                            CAN'T DECIDE?
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar