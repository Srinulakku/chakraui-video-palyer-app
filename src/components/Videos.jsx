import { SimpleGrid, Box, HStack, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

let videoArray =[
  'https://www.youtube.com/embed/uYPbbksJxIg',
  'https://www.youtube.com/embed/avz06PDqDbM',
  'https://www.youtube.com/embed/ORNIpbFDD44',
  'https://www.youtube.com/embed/RMINHy1KwCY',
  'https://www.youtube.com/embed/GVPzGBvPrzw',
  'https://www.youtube.com/embed/_25PCwQ7KHo',
  'https://www.youtube.com/embed/PUodFjt01CY',
  'https://www.youtube.com/embed/qNyzyzbX0wo',
  'https://www.youtube.com/embed/S_19dZRsGdQ',
  'https://www.youtube.com/embed/HUiz5dRdMdk'
  
]
const Videos = () => {
  const [video,setVideo]= useState(videoArray[0])
  return (
    <VStack spacing={4} m={4} align={['center', 'center', 'initial']}>
    <ReactPlayer width="100%" playing={true} controls url={video} style={{ height: '70vh' }} />
    <VStack width="100%">
      <Heading fontSize={['xl', '2xl', '3xl']}>Video Title</Heading>
      <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates repudiandae ex, itaque necessitatibus consectetur iure adipisci incidunt nobis autem!</Text>
    </VStack>
    <SimpleGrid columns={[1, 2, 2]} spacing={2} width="100%">
      {videoArray.map((video, idx) => (
        <Button onClick={() => setVideo(video)} key={idx} size="lg">Video {1 + idx}</Button>
      ))}
    </SimpleGrid>
  </VStack>
  )
}

export default Videos