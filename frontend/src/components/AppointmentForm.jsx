import React from 'react'
import { VStack,Textarea,Button, Stack,Input, Heading, FormLabel,FormControl,Avatar, Select } from '@chakra-ui/react'
function AppointmentForm() {
  return (

    

    <VStack  className='appointmentForm'
     as={"form"} py={"0"}  w={{base:"50%",md:500}}  bg={"grey.100"} height={"100vh"} justify={"center"}
    >
    
    <Heading alignSelf={"flex-start"} my={2} >Book Appointment</Heading>
    <FormControl>
      <FormLabel>select date </FormLabel>
      <Input type='datetime-local' placeholder='select date and time'/>
    </FormControl>
    <FormControl>
      <FormLabel>Select Department </FormLabel>
      <Select placeholder='select doctor' ></Select>
    </FormControl>
    <FormControl>
      <FormLabel>Select Doctor </FormLabel>
      <Select placeholder='select doctor' ></Select>
    </FormControl>
    <FormControl>
      
      <Textarea placeholder='tell us more about your condition ' />
      
      </FormControl>
      <Button alignSelf={"flex-start"} type="submit" >submit</Button>
    </VStack>
    
  )
}

export default AppointmentForm
