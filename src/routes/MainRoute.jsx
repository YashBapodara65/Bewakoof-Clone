import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import Login from '../pages/Login'
import Signup from "../pages/Signup";
import SingleProductPage from '../pages/SingleProductPage'

function MainRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/p' element={<SingleProductPage/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoute
