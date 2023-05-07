import React from 'react'
import {Stack,Image,CardBody,Text,Card,Heading,CardFooter,Button} from "@chakra-ui/react"
import {FaClock,FaCalendarAlt} from "react-icons/fa";
import Header from '../../components/Header';
import Footer from '../footer/Footer';
let dImages = ["https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000","https://www.sketchappsources.com/resources/source-image/doctor-illustration-hamamzai.png","https://www.browardhealth.org/-/media/bh_doctor_images/631299.jpg","https://app.doctornow.hk/wp-content/uploads/Doctor-pana-1.png","https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg","https://static.vecteezy.com/system/resources/previews/006/042/381/original/female-doctor-with-stethoscope-free-vector.jpg","https://thumbs.dreamstime.com/z/female-doctor-vector-illustration-family-flat-cartoon-style-design-186907994.jpg"]

function Myappointments() {
sessionStorage.setItem("role","user")
let role = sessionStorage.getItem("role");
 
return (

    <>
    <Header/>
    { role=="doctor"?<DoctorComponent/>:<UserComponent/>}
    <Footer/>
    </>
)
}


//user
function UserComponent(){
  return (
   <>
   <Stack p={10}>
   {dImages.fill(" ").map((item,i)=>{
           return <CardForUsers/>
    })}
   </Stack>
   </>
  )
}

//doctor
function DoctorComponent(){
  return (
    <>
    <Stack p={10}>

    {Array(4).fill(" ").map((item,i)=>{
           return <Card1/>
    })}
    </Stack>
    
    </>
  )
}




function Card1(){
    return (
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUsbvGhqqS0ofdUWBHUz20MHi3OfWqz457g&usqp=CAU"}
    alt='doctor image'
  />

  <Stack  >
    <CardBody>
      <Heading size='md'>User name</Heading>

      <Text py='2'>sir, I am suffering from cold and cough for 3 days please give me an appointmnet.</Text>
      <Text>Time : 12.00 | Date : 12.00</Text>
      
    </CardBody>

    <CardFooter>
      <Button bgColor={"blue.700"} m={4} variant='solid' colorScheme='blue'>Accept</Button>
      <Button bgColor={'red'} m={4} variant='solid' colorScheme='blue'>Reject</Button>
      
    </CardFooter>
  </Stack>
</Card>
    )
}


function CardForUsers(){
    return (
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUsbvGhqqS0ofdUWBHUz20MHi3OfWqz457g&usqp=CAU"}
    alt='doctor name'
  />

  <Stack  >
    <CardBody>
      <Heading size='md'>Doctor name</Heading>

      <Text py='2'>sir, I am suffering from cold and cough for 3 days please give me an appointmnet.</Text>
      <Text>Time : 12.00 | Date : 12.00</Text>
      
    </CardBody>

    <CardFooter>
      
      <Button bgColor={'red'} m={4} variant='solid' colorScheme='blue'>cancel</Button>
      
    </CardFooter>
  </Stack>
</Card>
    )
}

export default Myappointments
