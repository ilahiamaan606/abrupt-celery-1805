import React, { useState,useEffect } from 'react'
import {Stack,Image,CardBody,Text,Card,Heading,CardFooter,Button, Badge} from "@chakra-ui/react"
import {FaClock,FaCalendarAlt} from "react-icons/fa";
import Header from '../../components/Header';
import Footer from '../footer/Footer';
let dImages = ["https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000","https://www.sketchappsources.com/resources/source-image/doctor-illustration-hamamzai.png","https://www.browardhealth.org/-/media/bh_doctor_images/631299.jpg","https://app.doctornow.hk/wp-content/uploads/Doctor-pana-1.png","https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg","https://static.vecteezy.com/system/resources/previews/006/042/381/original/female-doctor-with-stethoscope-free-vector.jpg","https://thumbs.dreamstime.com/z/female-doctor-vector-illustration-family-flat-cartoon-style-design-186907994.jpg"]

function Myappointments() {
 if(!sessionStorage.getItem("role")){window.location.href="/login"}
 let role = sessionStorage.getItem("role");
 let user =JSON.stringify( sessionStorage.getItem("user"));
 let [appointments,setAppointments]=useState([])
 let [load,setLoad]=useState(0);
//  setLoad(load+1)

function fetchandUpdateAppointmentsData(){
  
  if(role=="Doctor"){
    fetch(`http://localhost:4500/ap/doctor/${user.id}?role=doctor`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':sessionStorage.getItem("token")
      },
    })
      .then((response) => response.json())
      .then((json) => {
        
        // console.log(json.datadoctor)
        setAppointments(json.data)
        
      });


  }
  else if(role=="Patient"){
    fetch(`http://localhost:4500/ap/pateint/${user.id}?role=pateint`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':sessionStorage.getItem("token")
      },
    })
      .then((response) => response.json())
      .then((json) => {
        
        // console.log(json.datadoctor)
        setAppointments(json.data)
        
      });
  }
  

}


  function doctorAccept(id){
  
  fetch(`http://localhost:4500/ap/status/${id}?role=pateint`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
    body:JSON.stringify({status:"Accepted"}),
  })
    .then((response) => response.json())
    .then((json) => {
      
      
      //alert(JSON.stringify(json))
      // if(response.status=="ok"){fetchandUpdateAppointmentsData()}
   
      alert(`${json.msg} for appointment with id ${json.data[0].id}`)
      fetchandUpdateAppointmentsData()
    });
  }
  function doctorReject(id){
    fetch(`http://localhost:4500/ap/status/${id}?role=pateint`, {
    method: 'PUT',
    body:JSON.stringify({status:"cancelled"}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
  })
    .then((response) => response.json())
    .then((json) => {
      
      
      //alert(JSON.stringify(json))
      
      alert(`${json.msg} for appointment with id ${json.data[0].id}`)
      fetchandUpdateAppointmentsData()
    });
  }
  
  function patientCancel(id){
  
  // alert(`cancelled with id ${id}`)
  //http://localhost:4500/ap/status/41?role=pateint
  //put
  fetch(`http://localhost:4500/ap/status/${id}?role=pateint`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
    body:JSON.stringify({status:"cancelled"}),
  })
    .then((response) => response.json())
    .then((json) => {
      
      
      //alert(JSON.stringify(json))
      
      alert(`${json.msg} for appointment with id ${json.data[0].id}`)
      
      fetchandUpdateAppointmentsData()
    });
  
  }
  

function Card1({appointment}){
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
    <Heading size='md'>
      {appointment.appointmentTime} | Date : {appointment.appointmentDate}
      </Heading>
      <Text py='2'>{appointment.description}</Text>
      <Text py='2'> status : <Badge>{appointment.status}</Badge></Text>
      <Text>Time : {appointment.appointmentTime} | Date : {appointment.appointmentDate}</Text>
  </CardBody>

  <CardFooter>
    <Button onClick={()=>{doctorAccept(appointment.id)}} bgColor={"blue.700"} m={4} variant='solid' colorScheme='blue'>Accept</Button>
    <Button onClick={()=>{doctorReject(appointment.id)}} bgColor={'red'} m={4} variant='solid' colorScheme='blue'>Reject</Button>
    
  </CardFooter>
</Stack>
</Card>
  )
}


function CardForUsers({appointment}){
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

    <Text py='2'>{appointment.description}</Text>
    <Text py='2'>id : {appointment.id}</Text>
    <Text border={"blue.700"} color={"blue.700"} py='2'> status : {appointment.status}</Text>
    <Text>Time : {appointment.appointmentTime} | Date : {appointment.appointmentDate} </Text>
    
  </CardBody>

  <CardFooter>
    {
     <Button onClick={ ()=>{ patientCancel(appointment.id)}} bgColor={'red'} m={4} variant='solid' colorScheme='blue'>cancel</Button>
    }
    
    
  </CardFooter>
</Stack>
</Card>
  )
}



  











  useEffect(()=>{

    if(role=="Doctor"){
      fetch('http://localhost:4500/ap/doctor/1?role=doctor', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':sessionStorage.getItem("token")
        },
      })
        .then((response) => response.json())
        .then((json) => {
          
          // console.log(json.datadoctor)
          setAppointments(json.data)
          
        });


    }
    else{
      fetch('http://localhost:4500/ap/pateint/2?role=pateint', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':sessionStorage.getItem("token")
        },
      })
        .then((response) => response.json())
        .then((json) => {
          
          // console.log(json.datadoctor)
          setAppointments(json.data)
          
        });
    }
    


  },[])




 console.log(appointments)
 //alert(appointments)


 

 let id = user.id;
 


// if(role=="Doctor"){alert("Doctor")}
// else if(role=="Patient"){alert("patient")}
// else {alert("nothing")}
 
return (

    <>
    <Header/>
    { role=="Doctor"?(
 <>
 <Stack p={10}>

 {appointments.map((item,i)=>{
        return <Card1 key={i} appointment={item}/>
 })}
 </Stack>
 
 </>
    ):(
      <>
      <Stack p={10}>
      {appointments.map((item,i)=>{
              if(item.status=="cancelled"){}
              else{return <CardForUsers key={item.id} appointment={item}/>}
              
       })}
      </Stack>
      </>

    )}
    <Footer/>
    </>
)
}











export default Myappointments
