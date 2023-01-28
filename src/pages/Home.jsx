import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import InfoBlock from '../components/infoBlock'
import NavBar from '../components/navBar'
import ProductBlock from '../components/productBlock/productBlock'
import SearchBlock from '../components/searchBlock'

function Home() {
    return (
        <>
            <Header />
            <ProductBlock />
            <InfoBlock />
            <SearchBlock />
        </>
    )
}

export default Home
