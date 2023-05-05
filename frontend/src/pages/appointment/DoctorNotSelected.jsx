import React from 'react'
import {VStack,Image,Avatar,Box} from "@chakra-ui/react"
import Medicine from "../../assets/images/medicine.svg"

function DoctorNotSelected() {
  return (
    <VStack w={"50%"} className="onlyForDesktop" >
    
    <Image width={"400px"} m={"auto"} src={Medicine} />
    
    
    </VStack>
  )
}

export default DoctorNotSelected
