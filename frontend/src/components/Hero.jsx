import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Schedule an appointment{' '}
            <Text as={'span'} color={'blue.400'}>
             online for family medicine
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Horizon Health Appointment Scheduler is a free service, available for everyone, that lets you schedule an appointment online with a doctor.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              align="center"
              textAlign={'center'}
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.700'}
              _hover={{ bg: 'blue.500' }}>
              new appointment
            </Button>
            <Button rounded={'full'} px={6}>
              learn more
            </Button>
          </Stack>
          {/* <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex> */}
        </Stack>
      </Container>
    );
  }
  
  
  