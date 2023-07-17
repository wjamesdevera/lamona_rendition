import React from 'react'
import { yolk, yolkStandTwo, eggStand } from '../assets'

const Background = () => {
  return (
    <div className='bg-bg-color'>
        <img src={yolk} alt="" className='absolute w-full h-auto sm:max-w-[250px] max-w-[150px] xl:bottom-[100px] bottom-[50px] -rotate-6 xl:right-[100px] right-[10px]'/>
        <img src={yolkStandTwo} alt="" className='absolute w-full h-auto sm:max-w-[300px] max-w-[200px] sm:top-[-100px] -top-[40px] rotate-[167deg] sm:left-[29%] left-[20%]'/>
        <img src={eggStand} alt="" className='absolute w-full h-auto bottom-[100px] rotate-[10.41deg] sm:left-[50px] left-[30px] xl:max-w-[250px] sm:max-w-[180px] max-w-[120px]'/>
    </div>
  )
}

export default Background