import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import NavBar from '../components/navBar'
import SearchBlock from '../components/searchBlock'

function HeaderLayout() {
    return (
        <>
            <NavBar />

            <Outlet/>
            <Footer />
        
        </>
    )
}

export default HeaderLayout
