import { Avatar, Button, Container, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Form, Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container height={"100vh"}>
      <VStack height={"100vh"}>
        <Heading alignItems={'flex-start'} mb={4} color={'purple'}>Registration</Heading>
        <Avatar name='user' alignSelf={'center'} size={'xl'} src='images/avatar.jpg'/>

        <form>
          <Input focusBorderColor='purple' mb={4} type='text' placeholder='First name'/>
          <Input focusBorderColor='purple' mb={4} type='text' placeholder='Last name'/>
          <Input focusBorderColor='purple' mb={4} type='email' placeholder='Email'/>
          <Input focusBorderColor='purple' mb={4} type='text' placeholder='Password'/>
          <Input focusBorderColor='purple' mb={4} type='text' placeholder='confirm password'/>
          
          <Button type='submit' colorScheme={'purple'} w={'full'} mb={4}>Sign up</Button>

          <HStack justifyContent={'end'}>
              <Text fontWeight={600}>Already a user?</Text>
              <Button variant={'link'}><Link to='/signin'>Sign in</Link></Button>
          </HStack>
        </form>



      </VStack>
    </Container>
  )
}

export default SignUp