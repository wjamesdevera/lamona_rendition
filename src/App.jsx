import React from 'react'
import { Footer, Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, About, Directory, Favorites, Choose } from './pages'

const App = () => (
  <Router>
    <div className='flex flex-col bg-bg-color text-text-body font-rubik overflow-hidden h-screen'>
      <Navbar/>
      <div className="bg-bg-color grow">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
      <Footer className='shrink-0'></Footer>
    </div>
  </Router>
)

export default App