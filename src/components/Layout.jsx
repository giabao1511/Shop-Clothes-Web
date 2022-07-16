import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout