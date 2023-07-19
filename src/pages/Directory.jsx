import {React, useState} from 'react'
import { empty } from '../assets'
import { directory } from '../constants'
import { Link } from 'react-router-dom'
import { sugar_daddy } from '../assets'

const Directory = () => {
  const checkTag = (tag) => {
    if (tag === 'All' || tag === 'Food' || tag === 'Drinks') {
      return "bg-purple-200"
    } else if (tag.includes('₱')) {
      return "bg-green-200"
    } else {
      return "bg-red-100"
    }
  }
  const [popOn, setPopUp] = useState(false);
  return (
    <main>
      <div className='px-5 lg:px-20'>
        <h2 className="text-3xl lg:text-5xl font-paytone-one text-main">
          Directory
        </h2>
      </div>

      <div className="flex justify-center items-center mt-4 lg:mt-6 px-5 my-4">
        <div className="flex flex-row gap-6 overflow-x-auto py-6 px-2" onClick={
          scrollBy({right: 100})
        }>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              American
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Cake
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Fast Food
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Chinese
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Korean
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Japanese
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Filipino
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              International
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Asian
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Chicken
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Pizza
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Pasta
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Ramen
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Rice Meal
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Samgyeopsal
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Sandwich
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Milk Tea
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Coffee
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Tea
            </p>
          </div>
          <div className="text-center rounded-lg font-rubik font-bold bg-white px-3 py-3 lg:pt-14 drop-shadow-xl flex-1 lg:min-w-[140px] min-w-[180px] flex lg:flex-col justify-center items-center gap-4">
            <img src={empty} alt="" className='w-12 lg:w-24'/>
            <p>
              Sweets
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-5">
        <div className="flex w-full gap-4">
          <form action="" className='flex w-full gap-4 border-lg border-2 border-black rounded-2xl py-3 px-3 text-lg'>
            <button className='font-rubik font-bold text-main flex justify-between items-center gap-4'>
              <p className='sm:block hidden'>FILTER RESTAURANT</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z"/></svg>
              </span>
            </button>
            <input type="search" name="" id="" className='border-l-2 border-black flex-1 outline-none px-4 bg-inherit' placeholder='What are you craving today?'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap overflow-hidden mt-6 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-12 pt-6">
          {directory.map((store) => (
            <Link key={store.id} to={`/sugardaddy`} className={`bg-white drop-shadow-xl pb-3 rounded-2xl w-full overflow-hidden hover:-translate-y-2 hover:drop-shadow-2xl`}>
              <div className={`h-[150px]`}>
                <img src={store.img_src} alt="" className={`w-full h-full object-cover`}/>
              </div>
              <div className={`mt-4 px-4`}>
                <h3 className={`font-paytone-one text-main text-3xl`}>
                  {store.title}
                </h3>
                <p className='whitespace-nowrap text-ellipsis overflow-hidden'>
                  {store.location}
                </p>
                <p className={`my-2 flex flex-wrap gap-1 text-sm`}>
                  {store.tags.map((tag, i) => (
                    <span key={0 + i} className={`${checkTag(tag)} rounded-md p-1`}>{tag}</span>
                  ))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Directory