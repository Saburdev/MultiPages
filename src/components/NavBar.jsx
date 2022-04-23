import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'
import { FaRegLightbulb } from 'react-icons/fa'
import { Projects } from '../pages/Projects'


export const NavBar = () => {
    return (
        <div class="navbar bg-base-900">
            <ul className="">
                <li className="">
                    <NavLink className={(nav) => nav.isActive ? "text-green" : "text-red"} to={"/"}>
                        <VscHome />
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to={"/projects"}>
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
    )
}
