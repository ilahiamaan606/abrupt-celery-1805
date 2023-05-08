import {useState,useEffect} from 'react'
import { Text,VStack,Textarea,Button, Stack,Input, Heading, FormLabel,FormControl,Avatar, Select } from '@chakra-ui/react'
import { object } from 'yup';
function AppointmentForm() {
//checking for doctor details in session storage
let doctorSelected = false;
if(sessionStorage.getItem("doctor")){doctorSelected=true}
let doctor = JSON.parse( sessionStorage.getItem("doctor")).name || "";
let department = JSON.parse( sessionStorage.getItem("doctor")).department || "";
const initialValues ={date:"",doctor,department,message:"",time:""}
const [formValue,setFormValue]=useState(initialValues);
const [isSubmit,setIsSubmit]=useState(false);
const [error,setError]=useState({});

useEffect(()=>{
if(isSubmit && Object.keys(error).length==0){
  alert("ready to submit");
  alert(JSON.stringify(formValue,null,4))
}



})
function handleSubmit(e){
e.preventDefault();
setIsSubmit(true);
setError(validate(formValue));
console.log(error)

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
  if(!obj.time){error.time="select time"}
  return error;
}




  return (

    <VStack  className='appointmentForm'
     as={"form"} py={"0"}  w={{base:"50%",md:500}}  bg={"grey.100"} height={"100vh"} justify={"center"}
    >
    
    <Heading alignSelf={"flex-start"} my={2} >Book Appointment</Heading>
    <FormControl>
      <FormLabel>select date </FormLabel>
      <Input name="date" onChange={handleChange} type='date' placeholder='select date and time'/>
      <Text color={"red"} >{error.date}</Text>
    </FormControl>
    <FormControl>
      <FormLabel>Select time</FormLabel>
      <Select name='time' onChange={handleChange}  >
      
        <option value={"10"} >10 AM to 11 AM</option>
        <option value={"11"} >11 AM to 12 PM</option>
        <option value={"1"} >1.00 PM to 1.55 PM</option>
        <option value={"2"}>2 PM to 2.55 PM</option>
        <option value={"3"}>3 PM to 4.55 PM</option>
        <option value={"7"}>7 PM to 7.55 PM</option>
        <option value={"8"} >8 PM to 8.55 PM</option>
        
      </Select>
      <Text color={"red"} >{error.time}</Text>
    </FormControl>
    
    <FormControl>
      <FormLabel>Select Department </FormLabel>
      <Select name='department' onChange={handleChange}  >
      {doctorSelected?<option>{JSON.parse(sessionStorage.getItem("doctor")).department}</option>:<option>select a doctor</option>}
        <option>cardiology</option>
        <option>physiology</option>
        <option>phycotherapy</option>
      </Select>
      <Text color={"red"} >{error.department}</Text>
    </FormControl>
    <FormControl>
      <FormLabel>Select Doctor </FormLabel>
      <Select   name='doctor' onChange={handleChange}  >
        {doctorSelected?<option>{JSON.parse(sessionStorage.getItem("doctor")).name}</option>:<option>select a doctor</option>}
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
