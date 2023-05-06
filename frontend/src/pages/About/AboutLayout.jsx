import medicine from '../../assets/images/tablets.svg'

import { FaLaptopMedical,FaPrescriptionBottle,FaTruck } from "react-icons/fa";
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }

 
 
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function AboutLayout() {
    return (
      <Container maxW={'8xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
           
            <Heading>Horizon Health Care pvt limited</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Horizon Health Care pvt limited is recognised as one of the premier hospitals in South Asia. Our commitment to affordable quality care has attracted a dedicated team of highly qualified medical professionals and other healthcare professionals from across the world to provide the highest standards of medical treatment. 
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={FaLaptopMedical} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Online Appointments'}
              />
              <Feature
                icon={<Icon as={FaPrescriptionBottle} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Vaccine Information'}
              />
              <Feature
                icon={
                  <Icon as={FaTruck} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={"Rush on demand"}
              />
              <Link to={"/ourstaffs"} ><Button bgColor={"blue.700"} color={"#fff"}  >Book an appointment now</Button></Link>
            </Stack>
          </Stack>
          <Flex>
            <Image
             bgColor={"blue.700"}
              rounded={'md'}
              alt={'feature image'}
              src={
                medicine
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }