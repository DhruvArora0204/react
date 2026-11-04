import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import{ Outlet } from 'react-router-dom'


function Layout() {
//dynamic content will be rendered here
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
