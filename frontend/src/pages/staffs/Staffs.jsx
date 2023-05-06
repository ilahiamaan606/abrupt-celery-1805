import React from 'react'
import Header from '../../components/Header'
import Footer from '../footer/Footer'
import Card from '../../components/Card'
import {Heading,Text,Stack,Select,Button} from "@chakra-ui/react"
function Staffs() {
    sessionStorage.setItem("department","anthropology")
    sessionStorage.removeItem("department")
  return (
    <>
    <Header/>
    <Heading color={"blue.700"} textAlign={"center"} m={4} >Our Doctors</Heading>
    <Text color={"blue.700"}  textAlign={"center"} >Here you can see the list of available doctors , choose  a department and book an appointment with any of our doctors.</Text>
    <Stack margin={"auto"}  flexDir={"row"} w={"300px"}>
        <Select onLoad={(e)=>{e.target.value="cardiology"}}  >
        <option>{sessionStorage.getItem("department") || "select department"} </option>
        </Select>
        
    </Stack>
    <Stack m={8} w={"100%"} h={"auto"} justify={"space-evenly"} display={"flex"} flexWrap={"wrap"} flexDir={"row"} >
    
    
      
      {Array(5).fill(" ").map((item,i)=>{
        return <Card/>
      })}
      
      </Stack>
    <Footer/>
    </>
  )
}

export default Staffs
