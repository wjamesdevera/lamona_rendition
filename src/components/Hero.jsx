import React from 'react'
import Background from './Background'

const Hero = () => {
  return (
    <main className='w-full bg-bg-color flex justify-center items-center grow min-content h-full'>
        <Background/>
        <div className="flex flex-col justify-center items-center max-w-[850px] text-center gap-12">
            <h1 className='text-8xl font-paytone-one text-main'>
                What are you craving today?
            </h1>
            <div className="text-xl font-bold grid grid-cols-2 gap-3">
                <button className='rounded-3xl border-4 border-main text-main px-16 py-4'>DIRECTORY</button>
                <button className='rounded-3xl border-4 border-main text-main px-16 py-4'>CAN'T DECIDE?</button>
            </div>
        </div>
    </main>
  )
}

export default Hero