import React from 'react'
import { BrandName } from '../components/BrandName'
import { Button } from '../components/Button'
import { NavBar } from '../components/NavBar'
import { Projects } from '../pages/Projects'


export const Home = () => {
    return (
        <div className=''>
            <BrandName />
            <div className="ml-[226px] mt-[228px]">
                <p className="bio text-6xl w-[697px] text-white">
                    Hello! &#128075;
                    My name is Sabur
                    I’m a Front-end developer
                </p>
                <p className="desc mt-[29px] mb-[109px] text-white">
                    Let me help you grow your
                    business and make your product look pretty while at it
                </p>
                <Button />
            </div>
            <footer className="mt-[126px] mb-[55px] ml-[142px] mr-[118px]">
                <NavBar />
            </footer>
        </div>
    )
}

export default Home