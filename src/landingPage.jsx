import React from 'react'
import Banner from './components/banner'
import NameCard from './components/nameCard'
import Footer from './components/footer'
import './components/styles.css'

const landingPage = () => {
  return (
    <div className="page-root">
      <main className="page-content">
        <Banner />
        <NameCard />
      </main>
      <Footer />
    </div>
  )
}

export default landingPage