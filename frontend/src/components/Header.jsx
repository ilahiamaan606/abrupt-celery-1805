import React from 'react'
import {Box,Image,Avatar,MenuButton,MenuList,MenuItem,Menu,MenuDivider, AvatarBadge, Flex,Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
import {HamburgerIcon,CloseIcon,ChevronDownIcon,ChevronRightIcon,} from '@chakra-ui/icons';
import {BiMenuAltLeft} from "react-icons/bi";
import { MdLogout,MdAccountCircle,MdAddTask,MdLogin } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import logo from "../assets/images/horizonHealthLogo.png"
function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <BiMenuAltLeft fontSize={'30px'}   h={9} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text> */}
            <Image onClick={()=>{navigate("/")}} className='HorizonHealthLogo' src={logo} maxH="35px"  />



            {/* <img src="../../assets/images/horizonHealthLogo.png" alt="" /> */}
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

   {/* changing navbar according to authorization*/}
   {localStorage.getItem("user")?<UserLogined/>:<UserNotLogined/>}
   

  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
}



const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('cyan.100', 'gray.100') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'blue.700' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'blue.700'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Doctor',
      children: [
        {
          label: 'Our staffs',
          subLabel: 'Meet our expert team',
          href: '/ourstaffs',
        },
        {
          label: 'Departments',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Appointment',
      children: [
        {
          label: 'Book Appointment',
          subLabel: 'Book your appointment',
          href: '/bookappointment',
        },
        {
          label: 'Appointment status',
          subLabel: 'check your appointment status',
          href: '/myappointments',
        },
      ],
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'services',
      href: '/services',
    },
  ];


function UserNotLogined(){

  return (

    <Stack
    flex={{ base: 1, md: 0 }}
    justify={'flex-end'}
    direction={'row'}
    spacing={6}>
    <Button
      as={'a'}
      fontSize={'sm'}
      fontWeight={400}
      variant={'link'}
      href={'#'}>
      Log In
    </Button>
    <Button
      as={'a'}
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'blue.700'}
      href={'#'}
      _hover={{
        bg: 'blue.700',
      }}>
      Register
    </Button>
  </Stack>




  )
}

function UserLogined(){
 return (
  <Stack
  flex={{ base: 1, md: 0 }}
  justify={'flex-end'}
  direction={'row'}
  spacing={6}>

<Menu>
               <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                
              
                <MenuDivider   />
                <MenuItem> <MdLogout className='nav_icons'  /> Logout</MenuItem>
              </MenuList>
              
             </Menu> 
             <Button
      as={'a'}
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'blue.700'}
      href={'#'}
      _hover={{
        bg: 'blue.700',
      }}>
      Log Out
    </Button>

  



 </Stack>






 )
}











export default Header
