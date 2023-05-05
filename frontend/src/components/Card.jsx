import React from 'react'
import { Badge, Box ,Icon,Stack,Text} from '@chakra-ui/react'
function Card() {
  return (
    <Box className='doctor_card' w={"250px"} bg={"gray.200"} m={"4"} rounded={"20px"} overflow={"hidden"} >
      <img src="https://media.istockphoto.com/id/1276580714/photo/3d-render-abstract-minimal-background-pink-blue-neon-light-square-frame-with-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=iY7i4jgqLETR592RWMFSbRpXrcKOogyQvghEHI_KuBk=" alt="" />
      <Box  p={5}  >
      <Stack isInline align={"baseline"} >
      <Badge variant={"solid"} variantColor={"teal"} px={2} bg={"blue.700"} rounded={"full"} >badge</Badge>
      <Badge variant={"solid"} variantColor={"teal"} px={2} bg={"blue.700"} rounded={"full"} >badge</Badge>
      <Text textTransform={"uppercase"} fontSize={"sm"} color={"blue.700"} letterSpacing={"wide"} >2 hours and : 12 hours</Text>
      </Stack>

      <Text  as={"h2"} fontWeight={"semibold"} fontSize={"xl"} my={"2"}  >
      Dr. Alexander 
      </Text>
      <Text isTruncated fontWeight={"light"} >
        Lorem, ipsum dolor sum dolor sit amet consectetur adipsit amet consectetur adipisicing elit. Culpa, quidem.
      </Text>
      <Stack isInline align={"baseline"} justify={"space-between"} >
      <Text fontWeight={"semibold"} fontSize={"lg"} >$20</Text>
      {/* <Icon name='star'  color={"blue.700"}/> */}
      <Box d="flex" >
      <Box as='span' >
      {Array(4).fill("").map((_,i)=>{
        return  <Icon key={i} name='star' mx="`1" color={"blue.700"}/>
      })}
      </Box>
      <Text as="h3" fontSize="lg" fontWeight="semibold">34 Reviews</Text>
      </Box>
      </Stack>
      </Box>
    </Box>
  )
}

export default Card
