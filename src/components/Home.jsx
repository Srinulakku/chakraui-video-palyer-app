import { Box, Container, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

let cProps = {
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '3',
  color: 'white',
  borderRadius: '10',
};

const Home = () => {
  return (
    <Box mt={4}>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={true}
        transitionTime={2000}
        interval={4000}
      >
        <Box h={'100vh'} w={'full'}>
          <Image
            src="images/IMG1.jpg"
            h={['full', '100vh']}
            objectFit={'cover'}
          />
          <Heading bgColor={'blackAlpha.600'} {...cProps}>
            WORLD OF GAMING
          </Heading>
        </Box>

        <Box h={'100vh'} w={'full'}>
          <Image
            src="images/IMG2.jpg"
            h={['full', '100vh']}
            objectFit={'cover'}
          />
          <Heading bgColor={'blackAlpha.600'} {...cProps}>
            WORLD OF SPORTS
          </Heading>
        </Box>

        <Box h={'100vh'} w={'full'}>
          <Image
            src="images/IMG.JPG"
            h={['full', '100vh']}
            objectFit={'cover'}
          />
          <Heading bgColor={'blackAlpha.600'} {...cProps}>
            SCIENCE AND TECHNOLOGY
          </Heading>
        </Box>
      </Carousel>

      <Container maxWidth="container.lg" mt={4}>
        <Heading
          textAlign="center"
          textDecoration="underline"
          fontSize={['xl', '2xl', '3xl']}
          mt={4}
        >
          Services
        </Heading>
        <HStack
          flexDirection={['column', 'column', 'row']}
          mt={2}
          alignItems={['center', 'center', 'initial']}
          textAlign="justify"
        >
          <Image
            borderRadius={3}
            w={['100%', '100%', '40%']}
            src="images/image4.jpg"
          />
          <Text lineHeight={[6, 8]} padding={['0.5rem', '1rem']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            reprehenderit numquam officiis sequi? Quo, provident. Excepturi
            maiores impedit laborum recusandae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit aut explicabo delectus quod?
            Asperiores hic facere culpa totam voluptas eos mollitia minima eum.
            Dicta reiciendis deserunt asperiores similique nisi dolorem quidem
            reprehenderit vero vitae recusandae. Dolor minus aperiam vel earum
            placeat! Est rem, provident et corporis quis accusamus aperiam odio
            architecto quo odit maiores, iusto error non magni
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Home;
