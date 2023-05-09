import React from 'react'
import AppointmentForm from '../../components/AppointmentForm'
import {Heading, Stack, VStack} from "@chakra-ui/react" 
import DoctorNotSelected from './DoctorNotSelected';
import DoctorSelected from './DoctorSelected';
import Header from '../../components/Header';
import Footer from '../footer/Footer';
import swal from "sweetalert2"

function Appointment() {
  if(!sessionStorage.getItem("role")){window.location.href="/login"}
  let d = true
  return (
    <>
    <Header/>
    <VStack  px={"50px"}>
  
    <Stack flexWrap={"wrap"} className='appointmentContainer' w={"100%"} mx={0} flexDirection={"row"} px={"0px"}  align={"center"} justify={"space-between"}  >
    <AppointmentForm/>
     
     {/* {d?<DoctorSelected  />:<DoctorNotSelected className="onlyForDesktop" />} */}
     <DoctorNotSelected/>
    </Stack>

    </VStack>

    <Footer/>
    </>
  )
}

export default Appointment
