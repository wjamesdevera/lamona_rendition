import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const isActive = (path) => {
        return location.pathname === path ? 'text-main' : '';
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
                        <a href="/" className={`hover:text-main ${isActive('/')}`}>
                            HOME 
                        </a>
                    </li>
                    <li>
                        <a href="/about" className={`hover:text-main ${isActive('/about')}`}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="/directory" className={`hover:text-main ${isActive('/directory')}`}>
                            DIRECTORY
                        </a>
                    </li>
                    <li>
                        <a href="/favorites" className={`hover:text-main ${isActive('/favorites')}`}>
                            FAVORITES
                        </a>
                    </li>
                    <li>
                        <a href="/choose" className={`hover:text-main ${isActive('/choose')}`}>
                            CAN'T DECIDE?
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar