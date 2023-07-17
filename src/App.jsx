import React from 'react'
import { Footer, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

const App = () => (
  <div className='flex flex-col bg-bg-color text-text-body font-rubik overflow-hidden h-screen'>
    <Navbar/>
    <div className="bg-bg-color grow">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    <Footer className='shrink-0'></Footer>
  </div>
)

export default App