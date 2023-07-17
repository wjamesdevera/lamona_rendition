import React from 'react'
import { Navbar } from './components'
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
  </div>
)

export default App