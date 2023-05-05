import {useState,useEffect} from 'react'
import {VStack,Heading,Text,Image,AvatarBox,Box, Badge} from "@chakra-ui/react"
import { MdMarkEmailRead } from "react-icons/md";
function DoctorSelected() {
//putting dummy data in session storage for reference
sessionStorage.setItem("doctor",JSON.stringify({name:"Dr.venugopal",profilePic:"https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",department:"Cardiology",email:"venugopal@gmail.com"}))


  let [doctor] =useState({
    name:JSON.parse(sessionStorage.getItem("doctor")).name,
    profilePic:JSON.parse(sessionStorage.getItem("doctor")).profilePic||"name",
    department:JSON.parse(sessionStorage.getItem("doctor")).department,
    email:JSON.parse(sessionStorage.getItem("doctor")).email
  })
  return (
    <VStack p={6} alignItems={"left"} borderRadius={"5px"} bgColor="gray.200" w={"48%"}  >
    <Heading   mb={4}  fontSize={"20px"}>Details</Heading>
    <Box  display={"flex"}  mt={4} >
    <Image w={"150px"} h={"150px"} borderRadius={"5px"} src={doctor.profilePic} alt='Dan Abramov' />
    <Box  p={4} >
    <Heading fontSize={"20px"}>{doctor.name}</Heading>
    <Text display={"flex"} alignItems={"center"} ><MdMarkEmailRead  color="blue.700" /> {" |   "+doctor.email}</Text>
    <Badge px={2} borderRadius={"10px"} color={"#fff"} bgColor={"blue.700"} >{doctor.department}</Badge>
    </Box>
    </Box>
    
    <Box >
    <Text>Appointment Time : <Badge>3.00pm sunday</Badge> </Text>
    <Text>Appointment Date : <Badge>3rd March 2022 </Badge> </Text>
    <Text>Venue : Horizon Heath care Pvt limited </Text>
   
    
    </Box>
    </VStack>
  )
}

export default DoctorSelected
