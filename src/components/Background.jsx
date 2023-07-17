import React from 'react'
import { yolk, yolkStandTwo, eggStand } from '../assets'

const Background = () => {
  return (
    <div className='bg-bg-color'>
        <img src={yolk} alt="" className='absolute w-full h-auto max-w-[250px] bottom-[100px] -rotate-6 right-[100px]'/>
        <img src={yolkStandTwo} alt="" className='absolute w-full h-auto max-w-[300px] top-[-100px] rotate-[167deg] left-[29%]'/>
        <img src={eggStand} alt="" className='absolute w-full h-auto bottom-[100px] rotate-[10.41deg] left-[50px] max-w-[250px]'/>
    </div>
  )
}

export default Background