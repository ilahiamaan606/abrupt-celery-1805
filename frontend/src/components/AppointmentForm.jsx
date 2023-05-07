import {useState,useEffect} from 'react'
import { Text,VStack,Textarea,Button, Stack,Input, Heading, FormLabel,FormControl,Avatar, Select } from '@chakra-ui/react'
import { object } from 'yup';
function AppointmentForm() {
const initialValues ={date:"",doctor:"",department:"",message:""}
const [formValue,setFormValue]=useState(initialValues);
const [isSubmit,setIsSubmit]=useState(false);
const [error,setError]=useState({});

useEffect(()=>{
if(isSubmit && Object.keys(error).length==0){
  alert("ready to submit")
}



})
function handleSubmit(e){
e.preventDefault();
setIsSubmit(true);
setError(validate(formValue))

}
function handleChange(e){
const {name,value}=e.target;
setFormValue({...formValue,[name]:value})
console.log(formValue)
}
function validate(obj){
  const error ={}
  if(!obj.date){error.date="select a date"}
  if(!obj.doctor){error.doctor="select a doctor"}
  if(!obj.department){error.department="select a department"}
  return error;
}




  return (

    <VStack  className='appointmentForm'
     as={"form"} py={"0"}  w={{base:"50%",md:500}}  bg={"grey.100"} height={"100vh"} justify={"center"}
    >
    
    <Heading alignSelf={"flex-start"} my={2} >Book Appointment</Heading>
    <FormControl>
      <FormLabel>select date </FormLabel>
      <Input name="date" onChange={handleChange} type='datetime-local' placeholder='select date and time'/>
      <Text color={"red"} >{error.date}</Text>
    </FormControl>
    <FormControl>
      <FormLabel>Select Department </FormLabel>
      <Select name='department' onChange={handleChange}  >
       
        <option>cardiology</option>
        <option>physiology</option>
        <option>phycotherapy</option>
      </Select>
      <Text color={"red"} >{error.department}</Text>
    </FormControl>
    <FormControl>
      <FormLabel>Select Doctor </FormLabel>
      <Select  value={formValue.doctor}  name='doctor' onChange={handleChange} placeholder='select doctor' >
        <option>andnuu</option>
        <option>alexander</option>
        <option>psdf</option>
      </Select>
      <Text color={"red"} >{error.doctor}</Text>
    </FormControl>
    <FormControl>
      
      <Textarea name='message' onChange={handleChange} placeholder='tell us more about your condition ' />
     
      </FormControl>
      <Button onClick={handleSubmit} alignSelf={"flex-start"} type="submit" >submit</Button>
    </VStack>
    
  )
}

export default AppointmentForm
