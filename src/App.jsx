import React from 'react'
import { Footer, Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, About, Directory, Favorites, Choose, Resto } from './pages'

const App = () => (
  <Router>
    <div className='flex flex-col bg-bg-color text-text-body font-rubik overflow-hidden min-h-screen'>
      <Navbar/>
      <div className="bg-bg-color grow">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/directory' element={<Directory/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/choose' element={<Choose/>}/>
          <Route path='/sugardaddy' element={<Resto/>}/>
        </Routes>
      </div>
      <Footer className='shrink-0'></Footer>
    </div>
  </Router>
)

export default App