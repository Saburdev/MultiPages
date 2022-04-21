import React from 'react'
import { NavLink} from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'
import { FaRegLightbulb } from 'react-icons/fa'

export const Home = () => {
    return (
        <div className=''>
            <h1 className="mt-12 ">Ololade.</h1>
            <div className="">
                <p className="">
                    Hello!👋🏻
                    My name is Ololade
                    I’m a Product Designer
                </p>
                <p className="">
                    Let me help you grow your
                    business and make your product look pretty while at it
                </p>
                <button className="">Say Hello</button>
            </div>
            <footer className="">
                <div class="navbar bg-base-900">
                    <ul className="">
                        <li className="">
                            <NavLink to={"/"}>
                                <VscHome />
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>
                                <FaRegLightbulb />
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink >
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}>

                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={""}></NavLink>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Home