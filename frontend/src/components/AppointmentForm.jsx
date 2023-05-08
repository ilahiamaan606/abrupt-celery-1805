import {useState,useEffect} from 'react'
import { Text,VStack,Textarea,Button, Stack,Input, Heading, FormLabel,FormControl,Avatar, Select } from '@chakra-ui/react'
import { object } from 'yup';
function AppointmentForm() {
const [allSlots ,setAllslots]=useState([]);

useEffect(()=>{


  fetch('http://localhost:4500/ap/allslot/?role=pateint', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
  })
    .then((response) => response.json())
    .then((json) => {
      
      // console.log(json)
       
       setAllslots(json.data);
      // alert(JSON.stringify(json.data));
     

      
    
    });
   



},[])

// console.log(allSlots,"allslots")



//checking for doctor details in session storage
let doctorSelected = false;
if(sessionStorage.getItem("doctor")){doctorSelected=true}
let doctor = JSON.parse( sessionStorage.getItem("doctor")).name || "";
let department = JSON.parse( sessionStorage.getItem("doctor")).department || "";
const initialValues ={date:"",doctor,department,message:"",time:""}
const [formValue,setFormValue]=useState(initialValues);
const [isSubmit,setIsSubmit]=useState(false);
const [error,setError]=useState({});
let [flag,setFlag]=useState(false)
useEffect(()=>{
if(isSubmit && Object.keys(error).length==0){
  // alert("ready to submit");
  //alert(JSON.stringify(formValue,null,4))
  let user = JSON.parse(sessionStorage.getItem("user"));
  let doctor = JSON.parse(sessionStorage.getItem("doctor"));
  let data = {
    pateintID:user.id,
    pateintname:user.name,
    appointmentDate:formValue.date,
    appointmentTime:formValue.time,
    doctorID:doctor.id,
    status:"pending",
    description:formValue.message

  }

 
  
  //check for conflict 
  //console.log(allSlots,"allslots (((((((((((((")
  let conflictData = allSlots.filter((item)=>{
    
    console.log("************************")
    console.log(item.appointmentDate==data.appointmentDate,item.appointmentDate,data.appointmentDate)
    console.log(item.appointmentTime==data.appointmentTime,item.appointmentTime,data.appointmentTime)
    console.log(item.doctorID==data.doctorID,item.doctorID,data.doctorID)
    console.log("************************")
    return ( item.appointmentDate==data.appointmentDate || item.appointmentTime==data.appointmentTime && item.doctorID==data.doctorID)
  })
  
  
 function pushToBackend(data){
  console.log("posting started")
  fetch(`http://localhost:4500/ap/slotbook/?role=pateint`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
  })
    .then((response) => response.json())
    .then((json) => {
      
       console.log(json)
       
       alert(json.msg)
      
      
    
    });
   

 }
 console.log(conflictData.length,conflictData,"conflict data length")
 console.log(data,"data")
 conflictData.length==0?(pushToBackend(data)):(alert("slot is not available,try to book another slot"));

}

},[flag])



function handleSubmit(e){
e.preventDefault();
setIsSubmit(true);
setError(validate(formValue));
setFlag(!flag)
//console.log(error)

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
