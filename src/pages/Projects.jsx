import React from 'react'
import { BrandName } from '../components/BrandName'
import imageTop from '../images/imageTop.png'
import imageBottom from '../images/imageBottom.png'
import { Button } from '../components/Button'
import { NavBar } from '../components/NavBar'


export const Projects = () => {
  return (
    <div className=''>
      <BrandName />
      <h1 className="text-[64px] font-bold text-white mt-5xl ml-[200px] mb-2xl">Projects &#128161;</h1>
      <p className="mb-[64px] ml-[200px] text-[#F9FAFB] not-italic">Some things i’ve been working on in the past few years:</p>
      <div className="section ml-[200px] mb-[108px] mr-[200px]">
        <div className="header-section flex gap-16">
          <div className="w-[500px]  ">
            <h2 className="text-4xl text-white fond-bold">Remotely</h2>
            <p className="mt-6 mb-14 text-[#F9FAFB] font-normal">Remotely is a remote friendly-company — with our headquarters in
              San Francisco, a second office in LA, and a strong commitment to
              ensuring people can do great work here and thrive without
              having to live near an office. This role is open to candidates across the U.S.
            </p>
            <Button />
          </div>
          <div className="">
            <img src={imageTop} alt="" Name="" className='w-[400px]' />
          </div>
        </div>
        <div className="main-section  flex gap-16">
          <div className="w-[450px]">
            <img src={imageBottom} alt="" className="w-[450px]" />
          </div>
          <div className="w-[500px]">
            <h2 className="text-4xl text-white font-bold">Brutal Design Library</h2>
            <p className="mt-6 mb-14 text-[#F9FAFB] font-normal">Brutal is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and
              thrive without having to live near an
              office. This role is open to candidates across the U.S.
            </p>
            <Button />
          </div>
        </div>
      </div>
      <footer className="mt-[108px] mb-[79px] ml-[110px] mr-[40px]">
        <NavBar />
      </footer>
    </div>
  )
}
