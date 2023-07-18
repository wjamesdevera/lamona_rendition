import React from 'react'
import { Background } from '../components'
import { yolk, chef, sunnySideOne } from '../assets'

const About = () => {
  return (
    <main className='flex flex-col justify-center items-center px-20 xl:px-96 pt-20'>
      <Background/>
      <div className="text-center mx-auto max-w-[700px] mb-12 z-20">
          <h1 className='font-paytone-one font-bold text-3xl sm:text-5xl xl:text-7xl text-main mb-6'>
              About Lamona
          </h1>
          <p className='text-center text-md sm:text-lg xl:text-xl'>
              <b>Lamona</b> is a food and drink directory for Thomasians.
              <br />
  This project is specifically catered for those who can't seem to decide what to eat (or drink).
          </p>
      </div>

      <div className="flex justify-center items-center xl:justify-center gap-4 text-sm xl:px-12">
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 ">
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScg-6JWXIA1sZB_fR5896HLIaiWGs3_gR5LBPyhp91kZfn0-w/viewform' target='_blank' className="card-hover rounded-xl drop-shadow-xl hover:drop-shadow-2xl bg-white px-5 py-4 flex xl:flex-col justify-center items-center gap-3 flex-1">
            <img src={chef} alt="" className='w-[50px] xl:w-[85px]'/>
            <div className="flex flex-col justify-center xl:items-center xl:text-center">
              <h3 className='text-sm sm:text-base xl:text-lg font-rubik font-bold text-main'>
                Add a Restaurant
              </h3>
              <p className='text-xs sm:text-sm xl:text-base mt-2'>
                Where's the newest munch on the block?
              </p>
            </div>
          </a>

          <a href='https://twitter.com/tara_lamona' target='_blank' className="card-hover rounded-xl drop-shadow-xl hover:drop-shadow-2xl bg-white px-5 py-4 flex xl:flex-col justify-center items-center gap-3 flex-1">
            <img src={yolk} alt="" className='w-[50px] xl:w-[85px]'/>
            <div className="flex flex-col justify-center xl:items-center xl:text-center">
              <h3 className='text-sm sm:text-base xl:text-lg font-rubik font-bold text-main'>
                Talk with us
              </h3>
              <p className='text-xs sm:text-sm xl:text-base mt-2'>
                Let's talk! How do you like your coffee?
              </p>
            </div>
          </a>

          <a href='https://docs.google.com/forms/d/e/1FAIpQLSeIV4n1Vo_Qste9ub1wIdBMJGFHvi54067tSKhQhbyo-LFi2Q/viewform' target='_blank' className="card-hover rounded-xl drop-shadow-lg bg-white px-5 py-4 flex xl:flex-col justify-center items-center gap-3 flex-1">
            <img src={sunnySideOne} alt="" className='w-[50px] xl:w-[85px]'/>
            <div className="flex flex-col xl:items-center justify-center xl:text-center">
              <h3 className='text-sm sm:text-base xl:text-lg font-rubik font-bold text-main'>
                Did you see an Error?
              </h3>
              <p className='text-xs sm:text-sm xl:text-base mt-2'>
                Let us know by filling out this form
              </p>
            </div>
          </a>

        </div>
      </div>
      <div className="mt-8 xl:mt-12 mb-12 xl:mb-4">
        <p className='text-xs xl:text-sm xl:text-center text-[#787877]'>
          Developed and designed with cravings by &nbsp;
          <a target="_blank" className='underline' href="https://anellapascua.notion.site/anellapascua/Anella-Pascua-Portfolio-55145f7d94e44e8cb917615a1c476b16">Anella Pascua</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://www.facebook.com/AustineFaith.M">Austine Marin</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://brin.read.cv/">Brin Isaac</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/Crufixs">Carlo Miñano</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://read.cv/danxdbsx">Danial Santos</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/andreadayo">Andrea Dayo</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/felicesfayej">Faye Felices</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/JoshuaEntrata">Joshua Entrata</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/JuliaMelle">Julia Pascua</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/julianabot">Juliana Rolluqui</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/xortaa">Kercwin Ocampo</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/scinscinscin">Lance Gulinao</a>
          ,&nbsp;
          <a target="_blank" className='underline' href="https://github.com/rchrdcrngl">Richard Caringal</a>
          , and &nbsp;
          <a target="_blank" className='underline' href="https://sharmainecrystel.notion.site/shaine-s-archive-e02c5f6408c0461cb53cbf064d0ab113">Sharmaine Argañosa</a>
          .
        </p>
      </div>
    </main>
  )
}

export default About