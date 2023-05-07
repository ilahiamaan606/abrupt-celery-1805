import React from 'react'
import {useNavigate} from "react-router-dom"
import { Badge,Image, Box ,Button,Icon,Stack,Text} from '@chakra-ui/react'
function Card(props) {
  const navigate = useNavigate();
  let dImages = ["https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000","https://www.sketchappsources.com/resources/source-image/doctor-illustration-hamamzai.png","https://www.browardhealth.org/-/media/bh_doctor_images/631299.jpg","https://app.doctornow.hk/wp-content/uploads/Doctor-pana-1.png","https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg","https://static.vecteezy.com/system/resources/previews/006/042/381/original/female-doctor-with-stethoscope-free-vector.jpg","https://thumbs.dreamstime.com/z/female-doctor-vector-illustration-family-flat-cartoon-style-design-186907994.jpg"]
  return (
    <Box border={"1px solid grey"} className='doctor_card' w={"250px"} bg={"gray.200"} m={"4"} rounded={"20px"} overflow={"hidden"} >
      <Image width={"100%"} h={"60%"} src={dImages[Math.floor(Math.random() * dImages.length)]} alt="" />
      <Box  p={5}  >
      <Stack isInline align={"baseline"} >
      <Badge variant={"solid"} variantColor={"teal"} px={2} bg={"blue.700"} rounded={"full"} >{props.doctor.department}</Badge>
      
      </Stack>

      <Text  as={"h2"} fontWeight={"semibold"} fontSize={"xl"} my={"2"}  >
      {props.doctor.name}
      </Text>
      <Text isTruncated fontWeight={"light"} >
        {props.doctor.description}
      </Text>
      <Stack isInline align={"baseline"} justify={"space-between"} >
      <Text fontWeight={"semibold"} fontSize={"lg"} >  ₹  {props.doctor.fee}</Text>
      {/* <Icon name='star'  color={"blue.700"}/> */}
      
     
      <Button  bgColor={"blue.700"} color={"#fff"} onClick={()=>{sessionStorage.setItem("doctor",JSON.stringify( props.doctor));navigate("/bookappointment")}}  >Book Now</Button>
      </Stack>
      
     
      
      </Box>
    </Box>
  )
}

export default Card
