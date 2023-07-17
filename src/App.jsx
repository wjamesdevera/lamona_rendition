import React from 'react'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => (
  <div className='flex flex-col bg-bg-color text-text-body font-rubik'>
    <Navbar/>
    <Routes>
      <Route path='/'/>

    </Routes>
  </div>
)

export default App