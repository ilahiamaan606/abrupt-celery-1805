import React from 'react'
import { Stack,Image,Box ,Heading} from '@chakra-ui/react';
import pageNotFoundImg from '../../assets/images/pageNotFound.svg'
function NotFound() {
  return (
    <Stack p={"50px"}align={"center"} >
   <Heading color={"blue.700"} m={"20px"} >Oops page not found !! </Heading>
   <Image m={"auto"}  w={"40%"} src={pageNotFoundImg} alt='Dan Abramov' />
   
   </Stack>
  )
}

export default NotFound
