import React from 'react'
import { Center, Heading, Box } from '@chakra-ui/react'

const ErrorScreen = () => {
  return (
      <>
    <Center
        bg="#4B3265"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
        p="3"
        pb="4"
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        
      
      <Box
        minH="100vh"
        bg="#332244"
        py="2rem"
        px="1rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          as="h1"
          fontSize={'2.25rem'}
          color="primary.100"
          fontFamily={'Roboto'}
          fontWeight={500}
          lineHeight={'42px'}
          textAlign='center'
        >
          There has been an error loading the Poll Page! 
        </Heading>
        
      </Box>
      
        
        
      </Center>
      </>
  )
}

export default ErrorScreen