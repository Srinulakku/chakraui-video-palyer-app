import React from 'react'
import { BiAlignLeft } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

const BasicDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='purple' onClick={onOpen}>
        <BiAlignLeft />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={'red.300'}>Video Player</DrawerHeader>
          <DrawerBody>
            <VStack >
              <Button  colorScheme='purple' variant={"ghost"} onClick={onClose}>
                <NavLink to={`/`}>Home</NavLink>
              </Button>
              <Button  colorScheme='purple' variant={"ghost"} onClick={onClose}>
                <NavLink to={'/videos'}>Videos</NavLink>
              </Button >
              <Button  colorScheme='purple' variant={"ghost"} onClick={onClose}>
                <NavLink to={'/videos?category=free'}>Free Videos</NavLink>
              </Button>
              <Button  colorScheme='purple' variant={"ghost"} onClick={onClose}>
                <NavLink to={'/upload'}>Upload Videos</NavLink>
              </Button>
            </VStack>

            
          </DrawerBody>

          <DrawerFooter>
            <HStack w={'full'} justifyContent={'space-around'} >
              <Button colorScheme='purple' mr={3} onClick={onClose}>
                <NavLink to='/signIn'>Sign In</NavLink>
              </Button>
              <Button colorScheme='purple' variant={'outline'} onClick={onClose}>
                <NavLink to='/signUp'>Sign Up</NavLink>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BasicDrawer 