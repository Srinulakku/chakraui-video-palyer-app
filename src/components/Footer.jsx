import { Box, HStack, Text, Input, VStack, Button } from '@chakra-ui/react'
import React from 'react'

const styleText = {
    textAlign: 'left',
    fontSize: '1.5rem',
    ':hover': {
        cursor: 'pointer'
    }
}



const Footer = () => {
    return (
        <HStack flexDirection={['column','row']} bgColor={'black'} color={'white'} p={2} >
            <VStack alignItems={'flex-start'} w={'full'}  borderRight={['none','2px solid']}>
                <Text>Contact us on</Text>
                <HStack w={'full'}  borderBottom={'2px solid white'} pb={2}>
                    <Input placeholder='Enter Email...' size={"md"} />
                    <Button colorScheme='purple' variant={'outline'}>Send</Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderRight={['none','2px solid']}>
                <Text sx={styleText}>Video player</Text>
                <Text>All Rights Reserved - 2023 </Text>
            </VStack>

            <VStack w={'full'}>
                <Text>Social Media</Text>
                <Button variant={'link'}><a href="https://www.instagram.com">Instagram</a>
                </Button>
                <Button variant={'link'}><a href="https://www.linkedin.com">Linkedin</a>
                </Button>
                <Button variant={'link'}><a href="https://www.github.com">GitHub</a>
                </Button>
            </VStack>
        </HStack>
    )
}

export default Footer