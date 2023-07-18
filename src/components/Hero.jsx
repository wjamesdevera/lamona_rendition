import React from 'react'
import Background from './Background'

const Hero = () => {
  return (
    <main className='w-full bg-bg-color flex justify-center items-center grow min-content h-full'>
        <Background/>
        <div className="flex flex-col justify-center items-center max-w-[850px] text-center gap-12">
            <div className="flex flex-col justify-center items-center gap-12 mt-24">
                <h1 className='xl:text-8xl sm:text-6xl text-3xl font-paytone-one text-main'>
                    What are you craving today?
                </h1>
                <div className="sm:text-xl font-raleway font-bold flex xl:flex-row flex-col justify-center items-center gap-3">
                    <a href="/directory" className='flex-1'>
                        <button className='sm:w-[290px] w-[200px] sm:h-[90px] h-[40px] sm:text-2xl sm:rounded-[30px] rounded-full sm:border-4 border-[3px] border-main text-main px-14 sm:py-3 hover:bg-main hover:text-bg-color'>DIRECTORY</button>
                    </a>
                    <a href="/choose" className='flex-1'>
                        <button className='text-center sm:w-[290px] w-[200px] sm:h-[90px] h-[40px] sm:text-2xl sm:rounded-[30px] rounded-full sm:border-4 border-[3px] border-main text-main sm:px-12 px-8 sm:py-3 hover:bg-main hover:text-bg-color'>CAN'T DECIDE?</button>
                    </a>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero