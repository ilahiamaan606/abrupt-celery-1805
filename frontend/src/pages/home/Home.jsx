import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import  Card  from '../../components/Card'
import {Flex, Heading, VStack,Button} from "@chakra-ui/react"
import Footer from '../footer/Footer'

function Home() {
  localStorage.setItem("user","false");
  let doctors = [
    {name:"Dr alexander",department:"cardiology",description:"Here you can see the list of available doctors , choose  a department and book an appointment with any of our doctors.",fee:20},
    {name:"John Doe",department:"phsycotherappy",description:"Here you can see the list of available doctors , choose  a department and book an appointment with any of our doctors.",fee:20},
    {name:"Kaalidas",department:"ENT",description:"Here you can see the list of available doctors , choose  a department and book an appointment with any of our doctors.",fee:20},
    {name:"Yamuna",department:"Dermatology",description:"Here you can see the list of available doctors , choose  a department and book an appointment with any of our doctors.",fee:20},
  ]

  return (
   <>
   <Header/>
  
   <Hero/>
   <VStack py={6}  >
   <Heading  color={"blue.700"} >Our Doctors</Heading>
   <Flex  flexWrap={"wrap"} justify={"center"}  >
    {doctors.map((doctor,i)=>{
      return <Card doctor={doctor} key={i}/>
    })}
   </Flex>
   <Button  m={20} >more</Button>
   </VStack>
   
   <Footer/>
   </>
  )
}

export default Home
