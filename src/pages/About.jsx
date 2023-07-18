import React from 'react'
import { Background } from '../components'
import { yolk, chef } from '../assets'

const About = () => {
  return (
    <main className='max-w-[1000px] flex flex-col justify-center items-center px-20 pt-20'>
      <Background/>
      <div className="text-center mx-auto max-w-[700px] mb-12">
          <h1 className='font-paytone-one font-bold text-3xl text-main mb-6'>
              About Lamona
          </h1>
          <p className='text-center text-md'>
              <b>Lamona</b> is a food and drink directory for Thomasians.
              <br />
  This project is specifically catered for those who can't seem to decide what to eat (or drink).
          </p>
      </div>

      <div className=" flex flex-col gap-4 text-sm">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScg-6JWXIA1sZB_fR5896HLIaiWGs3_gR5LBPyhp91kZfn0-w/viewform' target='_blank' className="rounded-xl drop-shadow-lg bg-white px-5 py-4 flex justify-center items-center gap-3">
          <img src={chef} alt="" className='w-[50px] '/>
          <div className="flex flex-col justify-center">
            <h3 className='font-rubik font-bold text-main'>
              Add a Restaurant
            </h3>
            <p className='text-xs mt-2'>
              Where's the newest munch on the block?
            </p>
          </div>
        </a>

        <a href='https://twitter.com/tara_lamona' target='_blank' className="rounded-xl drop-shadow-lg bg-white px-5 py-4 flex justify-center items-center gap-3">
          <img src={yolk} alt="" className='w-[50px] '/>
          <div className="flex flex-col justify-center">
            <h3 className='font-rubik font-bold text-main'>
              Talk with us
            </h3>
            <p className='text-xs mt-2'>
              Let's talk! How do you like your coffee?
            </p>
          </div>
        </a>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeIV4n1Vo_Qste9ub1wIdBMJGFHvi54067tSKhQhbyo-LFi2Q/viewform' target='_blank' className="rounded-xl drop-shadow-lg bg-white px-5 py-4 flex justify-center items-center gap-3">
          <img src={yolk} alt="" className='w-[50px] '/>
          <div className="flex flex-col justify-center">
            <h3 className='font-rubik font-bold text-main'>
              Did you see an Error?
            </h3>
            <p className='text-xs mt-2'>
              Let us know by filling out this form
            </p>
          </div>
        </a>
      </div>
      <div className="mt-8 mb-12">
        <p className='text-xs text-[#787877]'>
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