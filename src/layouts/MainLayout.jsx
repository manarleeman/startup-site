import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/nav'
import Footer from '../components/footer'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
