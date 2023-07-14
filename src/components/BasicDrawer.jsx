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
          <DrawerHeader color="red.400">Video Player</DrawerHeader>

          <DrawerBody>
            <VStack>
              <Button colorScheme='purple' variant={"ghost"}>
                <NavLink to={`/`}>Home</NavLink>
              </Button>
              <Button colorScheme='purple' variant={"ghost"}>
                <NavLink to={'/videos'}>Videos</NavLink>
              </Button >
              <Button colorScheme='purple' variant={"ghost"}>
                <NavLink to={'/videos?category=free'}>Free Videos</NavLink>
              </Button>
            </VStack>


          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BasicDrawer