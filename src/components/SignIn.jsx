import { Button, Container, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'

const SignIn = () => {
  const [state,setState] =useState(false)

  return (
    <Container h={'75vh'}>
      <VStack >
        <form>
          <Heading mb={4} textAlign={'center'}>Welcome Back</Heading>
          
          <Input required focusBorderColor='purple' placeholder='Email' type='email' mb={4} />

          <InputGroup size={"md"}>
            <Input
            pr={'6rem'}
            type={state?'text':'password'}
            placeholder='Enter password'
            />
            <InputRightElement width={'5rem'}>
              <Button size={'sm'} onClick={()=>{setState(!state)}}>
                {state?'Hide':'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button mb={4} ml={'auto'} display={'block'} color={'red.400'} mt={1} variant={'link'}>
            <a href="/forgotpassword">Forgot Password?</a>
          </Button>

          <Button type='submit' w={'full'} colorScheme='purple'>Sign in</Button>

          <HStack justifyContent={'end'}>
              <Text fontWeight={600}>New user?</Text>
              <Button variant={'link'}><Link to='/signup'>Sign up</Link></Button>
          </HStack>

          
        </form>


      </VStack>
    </Container>
  )
}

export default SignIn