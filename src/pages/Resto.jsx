import React from 'react'
import { sugar_daddy, eggSit, sunnySideThree, sugar_menu_1, sugar_menu_2 } from '../assets'

const Resto = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className="bg-white rounded-xl drop-shadow-xl py-4 w-[90%] mb-8">
            <div className="px-8 pt-4 flex flex-col items-center">
                <div className="w-full flex justify-between px-2">
                    <div className="text-lg">
                    <span className='bg-red-300 rounded-md p-1 mr-2'>All</span>
                    <span className='bg-green-200 rounded-md p-1'>₱</span>
                    </div>
                    <button onClick={() => {setPopUp((prev) => !prev)}} className='text-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/></svg>
                    </button>
                </div>
                <div className="">
                    <div className="flex justify-start gap-2 text-main text-3xl my-3">
                    <svg className='text-[#787877] text-2 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>
                    <h1 className='text-3xl font-paytone-one text-main place-self-start'>
                        $ugar Daddy
                    </h1>
                    </div>
                    <div className="flex gap-2 px-3 mb-2">
                    <ul className='text-sm'>
                        <li className='flex items-center mb-1'>
                        <svg className='max-w-[20px] mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#888888" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/></svg>
                        1239 A. Asturias street sampaloc manila manila city, Metro Manila
                        </li>
                        <li className='flex items-center mb-1'>
                        <svg className='max-w-[20px] mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#888888" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z"/></svg>
                        10:00 AM - 10:00 PM
                        </li>
                        <li className='flex items-center mb-1'>
                        <svg className='max-w-[20px] mr-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                        0905 560 2842
                        </li>
                        <li className='flex items-center mb-1'>
                        <svg className='max-w-[20px] mr-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="#888888"><path d="M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/></g></svg>
                        Cash, GCash
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col items-center h-[280px] w-full">
                <div className="full border-2 border-main rounded-lg overflow-hidden h-[280px]">
                    <img src={sugar_daddy} alt="" className='object-cover w-full h-100'/>
                </div>
                    <button className='relative -top-6 border-main border-2 rounded-xl bg-white px-10 py-2 text-xl font-rubik text-main'>
                        <span>View Map</span>
                    </button>
                </div>

                <div className="flex flex-col items-center px-10">
                    <div className="">
                        <h3 className='font-rubik font-semibold text-2xl text-secondary'>
                            Dietary Restrictions
                        </h3>
                        <ul className='flex flex-start flex-wrap mt-3 mb-6'>
                            <li className='flex gap-6'>
                                <p>
                                    😳
                                </p>
                                <p>
                                    Dairy Free
                                </p>
                            </li>
                        </ul>
                        <h3 className='font-rubik font-semibold text-2xl text-secondary'>
                            What can you find in $ugar Daddy?
                        </h3>
                        <ul className='flex flex-start flex-wrap mt-3 mb-6'>
                            <li className='flex gap-6'>
                                <p>
                                    🚻
                                </p>
                                <p>
                                    Comfort room
                                </p>
                            </li>
                            <li className='flex gap-6'>
                                <p>
                                    🖥️
                                </p>
                                <p>
                                    Surveillance cameras
                                </p>
                            </li>
                        </ul>
                        <h3 className='font-rubik font-semibold text-2xl text-secondary'>
                            $ugar Daddy is perfect for ...
                        </h3>
                        <ul className='flex flex-wrap mt-3 mb-6'>
                            <li className='flex gap-6'>
                                <p>
                                    😳
                                </p>
                                <p>
                                    Quick bite
                                </p>
                            </li>
                            <li className='flex gap-6'>
                                <p>
                                    😳
                                </p>
                                <p>
                                    Thirst quencher
                                </p>
                            </li>
                        </ul>
                        <h3 className='font-rubik font-semibold text-2xl text-secondary'>
                            $ugar Daddy Menu
                        </h3>
                        <div className="overflow-x-auto flex  flex-nowrap w-full gap-8 mt-4 mb-5">
                            <div className="border-2 border-black rounded-xl h-[150px] basis-52 flex-grow-0 flex-shrink-0 mb-1">
                                <img src={sugar_menu_1} alt="" className='object-cover w-full h-full opacity-75 rounded-xl'/>
                            </div>
                            <div className="border-2 border-black rounded-xl h-[150px] basis-52 flex-grow-0 flex-shrink-0 mb-1">
                                <img src={sugar_menu_2} alt="" className='object-cover w-full h-full opacity-75 rounded-xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative w-full bg-field-1 float-left flex justify-center h-[150px] mb-10 text-center items-center">
            <img src={eggSit} alt="" className='absolute top-[50px] w-[120px] left-5'/>

            <div className="ml-24">
                <h3 className='text-2xl font-rubik text-center font-[500]'>
                    Spot an error?
                </h3>
                <p>
                    Help us correct information!
                </p>
                <a href="">
                    <button className='rounded-lg border-2 w-[200px] h-[44px] my-3 border-main text-main font-raleway font-bold text-sm hover:bg-main hover:text-field-1'>
                        ERROR FORM
                    </button>
                </a>
            </div>
        </div>
        <div className="relative w-full bg-field-1 float-right flex justify-center h-[150px] mb-10 text-center items-center">
            <img src={sunnySideThree} alt="" className='absolute top-[50px] w-[200px] h-[200px] right-3'/>

            <div className="mr-24">
                <h3 className='text-2xl font-rubik text-center font-[500]'>
                    Wanna see your faves?
                </h3>
                <p>
                    Let us know by adding a listing!
                </p>
                <a href="">
                    <button className='rounded-lg border-2 w-[200px] h-[44px] my-3 border-main text-main font-raleway font-bold text-sm hover:bg-main hover:text-field-1'>
                        LISTING FORM 
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Resto