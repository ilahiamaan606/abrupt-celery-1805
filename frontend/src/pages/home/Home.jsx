import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import  Card  from '../../components/Card'
import {Flex, Heading, VStack,Button} from "@chakra-ui/react"
function Home() {
  localStorage.setItem("user","false")
  return (
   <>
  
  
   <Hero/>
   <VStack py={6}  >
   <Heading  color={"blue.700"} >Our Doctors</Heading>
   <Flex  flexWrap={"wrap"} justify={"center"}  >
    {Array(4).fill("").map((_,i)=>{
      return <Card  key={i}/>
    })}
   </Flex>
   <Button  m={20} >more</Button>
   </VStack>
   
   
   </>
  )
}

export default Home
