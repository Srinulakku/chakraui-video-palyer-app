
import React, { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    {/* We need to enclose all the contents inside the ChakraProvider to sell the chakra designs in the app */}
    <ChakraProvider>
      <ColorModeSwitcher pos={'absolute'} top={'4'} right={'4'}/>
      <App/>
    </ChakraProvider>
  </StrictMode>
);

