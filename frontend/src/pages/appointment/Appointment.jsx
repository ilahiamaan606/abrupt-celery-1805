import React from 'react'
import AppointmentForm from '../../components/AppointmentForm'
import {Heading, Stack, VStack} from "@chakra-ui/react" 
import DoctorNotSelected from './DoctorNotSelected';
import DoctorSelected from './DoctorSelected';
import Header from '../../components/Header';
import Footer from '../footer/Footer';

function Appointment() {
  localStorage.setItem("doctor",JSON.stringify({name:"Dr venugopal",deparment:"cardology",email:"venu@gmail.com",desc:"lorem ispum doler sit amet and doning skdfjh sdfhaidfhaidfha adhf sdfhsdfgvskdfh ",profilePic:"https://media.istockphoto.com/id/1330046035/photo/headshot-portrait-of-smiling-female-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=fsNQPbmFIxoKA-PXl3G745zj7Cvr_cFIGsYknSbz_Tg="}))
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
