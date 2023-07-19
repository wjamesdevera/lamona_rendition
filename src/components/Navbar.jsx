import {React, useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
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
                <div className={`xl:hidden block`} onClick={() => setToggle((prev) => !prev)}>
                    <div className={`${toggle ? 'on' : ''}`} id='toggle'>
                        <span className='w-14 h-14'></span>
                    </div>  
                </div>
                <div className={`${toggle ? 'block' : 'hidden'}  left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[100]`}>
                    <div className="absolute bg-white px-6 py-4 z-50 rounded-2xl right-6 top-20">
                        <ul className={`flex flex-col gap-4 text-lg font-raleway font-extrabold text-[#787877]`}>
                            <li>
                                <NavLink to="/" className={`hover:text-main ${isActive('/')}`} onClick={() => setToggle((prev) => !prev)}>
                                    HOME 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={`hover:text-main ${isActive('/about')}`} onClick={() => setToggle((prev) => !prev)}>
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/directory" className={`hover:text-main ${isActive('/directory')}`} onClick={() => setToggle((prev) => !prev)}>
                                    DIRECTORY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/favorites" className={`hover:text-main ${isActive('/favorites')}`} onClick={() => setToggle((prev) => !prev)}>
                                    FAVORITES
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/choose" className={`hover:text-main ${isActive('/choose')}`} onClick={() => setToggle((prev) => !prev)}>
                                    CAN'T DECIDE?
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className={`xl:flex hidden gap-[90px] text-xl font-raleway font-extrabold text-[#787877]`}>
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