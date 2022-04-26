import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export const BrandName = () => {
  return (
    <Link to='/'>
    <h1 onClick={() => {<Home/>}} className="brandname mt-6 ml-16 text-6xl text-blue-500 ">Sabur <span className="text-red-500">.</span></h1>
    </Link>
  )
}


