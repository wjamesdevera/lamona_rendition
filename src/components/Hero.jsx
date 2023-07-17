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
            <div className="text-xl font-bold flex justify-center items-center gap-3">
                <a href="/directory" className='flex-1'>
                    <button className='w-[290px] h-[90px] text-2xl rounded-[30px] border-4 border-main text-main px-14 py-3 hover:bg-main hover:text-bg-color'>DIRECTORY</button>
                </a>
                <a href="/choose" className='flex-1'>
                    <button className='w-[290px] h-[90px] text-2xl rounded-[30px] border-4 border-main text-main px-12 py-3 hover:bg-main hover:text-bg-color'>CAN'T DECIDE?</button>
                </a>
            </div>
        </div>
    </main>
  )
}

export default Hero