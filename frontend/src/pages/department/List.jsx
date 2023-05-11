import {useState,useEffect} from 'react'
import {Box,Button,Container,Flex,Heading,Icon,Stack,Text,useColorModeValue,} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {FcAbout,FcLike,FcAssistant,FcCollaboration,FcDonate,FcManager,} from 'react-icons/fc';
import {FaTeeth,FaHandHoldingHeart,FaEye,FaHandHoldingWater} from 'react-icons/fa';
interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
//making departments dynamic with the help of the following array.
let deparmentArr = [
    {heading:"cardiology",
    icon:FaHandHoldingHeart,
    description:"Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart. It deals with the diagnosis and treatment of such conditions as congenital heart defects, coronary artery disease, electrophysiology, heart failure and valvular heart disease.",
    },
    {heading:"DEPARTMENT OF ORAL & MAXILLOFACIAL SURGERY.",
    icon:FaTeeth,
    description:"A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry (the diagnosis, prevention, management, and treatment of diseases and conditions of the oral cavity and other aspects of the craniofacial complex including the temporomandibular joint).",
    },
    {heading:"DEPARTMENT OF ORAL & MAXILLOFACIAL SURGERY.",
    icon:FaTeeth,
    description:"A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry (the diagnosis, prevention, management, and treatment of diseases and conditions of the oral cavity and other aspects of the craniofacial complex including the temporomandibular joint).",
    },
    {heading:"ENT Department",
    icon:FaEye,
    description:"A doctor who has special training in diagnosing and treating diseases of the ear, nose, and throat. Also called otolaryngologist.",
    },
    {heading:"cardiology",
    icon:FaHandHoldingWater,
    description:"Dermatology is the branch of medicine dealing with the skin.[1][2] It is a speciality with both medical and surgical aspects.",
    }

]



function List() {

//fetching data 
let [doctors1,setDoctors]=useState([]);
 const [departments,setDepartments]=useState([]);
 
useEffect(()=>{


  fetch('https://shy-jade-giraffe.cyclic.app/ap/doctor/?role=pateint', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':sessionStorage.getItem("token")
    },
  })
    .then((response) => response.json())
    .then((json) => {
      
      // console.log(json.datadoctor)
      setDoctors(json.datadoctor)
      console.log(doctors1)
      
    
    });
   



},[])

//data fetching ends















  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
         Our Departments
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Here you can see various department realted to Horizon Heath Care, select a department and you will get directed to the list of doctors according to that department.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">

              
          {
           deparmentArr.map((item)=>{
            return   <Card
            heading={item.heading}
            icon={<Icon color={"blue.700"} as={item.icon} w={10} h={10} />}
            description={
              item.description.substring(0,70)+"..."
            }
            href={`/departments/${item.heading}`}
          />
           })




          }
         
          




        </Flex>
      </Container>
    </Box>
  )
}


//card component 
const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };



export default List
