import React from 'react'
import { BrandName } from '../components/BrandName'
import { Button } from '../components/Button'
import { NavBar } from '../components/NavBar'

export const About = () => {
    return (
        <div className="">
            <BrandName />
            <div className="mt-9 mx-[220px] mb-14">
                <h1 className="font-bold text-[64px] text-[#F9FAFB] ">About Me &#128104; </h1>
                <p className="mt-4 mb-12 ">A brief intro to who i am and how i do what i do:</p>
                <p className="mb-6 text-2xl text-[#F9FAFB] fond-normal">I am<span className="text-6xl text-bold ">SABUR</span></p>
                <p className="items-justify text-white font-normal">A Front-end developer from Uzbekistan. I got into tech while i was student at olabisi onabanjo university, Bsc Zoology.
                    I've always been fascinated with how things work. fast forward to 2 years later and i'm now designing landing pages for business around the world.
                    <br />
                    <br />
                    I believe i’ve got the right skills and technologies to take
                    your online presence on the level it truly deserves. Your website should be your no1
                    sales agent and its works 24/7, Get a quote now that’s best for your business.
                </p>
                <div className="mt-10">
                <Button />
                </div>
            </div>
            <footer className="mt-[126px] mb-[55px] ml-[142px] mr-[118px]">
                <NavBar />
            </footer>
        </div>
    )
}
