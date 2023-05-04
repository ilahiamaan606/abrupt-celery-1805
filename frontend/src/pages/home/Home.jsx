import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
function Home() {
  localStorage.setItem("user","false")
  return (
   <>
  
   <Header/>
   <Hero/>
   
   </>
  )
}

export default Home
