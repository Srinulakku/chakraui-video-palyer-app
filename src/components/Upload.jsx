import { UpDownIcon } from '@chakra-ui/icons'
import { Input, VStack, border } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload = () => {
  return (
    <VStack h={'80vh'} justifyContent={'center'}>
      
      <AiOutlineCloudUpload color='purple' fontSize={50}/>
      <Input type='file' w={'25%'} css={{'&::file-selector-button':{
        backgroundColor:'purple',
        color:'white',
        padding:'0.5em 1em',
        
        border:'none',
        borderRadius:'4px',
        marginRight:'-20px',
        float:'right',
        display:'flex',
        alignItems:'center'

      }}}/>

    </VStack>
  )
}

export default Upload