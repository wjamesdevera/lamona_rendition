import React from 'react'

const About = () => {
  return (
    <main className='max-w-[1000px] flex flex-col justify-center items-center m-auto'>
        <div className="text-center mx-auto max-w-[700px]">
            <h1 className='font-paytone-one font-bold text-7xl text-main mb-6'>
                About Lamona
            </h1>
            <p className='text-center text-xl'>
                <b>Lamona</b> is a food and drink directory for Thomasians.
                <br />
    This project is specifically catered for those who can't seem to decide what to eat (or drink).
            </p>
        </div>
    </main>
  )
}

export default About