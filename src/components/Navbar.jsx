import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky z-10 left-0'>
        <nav className='flex flex-between py-5 px-[5vw]'>
            <a href="/" className='text-4xl font-paytone-one text-main'>
                lamona
            </a>
            <ul className='flex gap-24 text-xl'>
                <li>
                    <a href="">
                        HOME 
                    </a>
                </li>
                <li>
                    <a href="">
                        ABOUT
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar