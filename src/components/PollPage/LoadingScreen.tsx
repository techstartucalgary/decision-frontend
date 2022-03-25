import React from 'react';
import { Center, Spinner, Box } from '@chakra-ui/react';

const LoadingScreen = () => {
  return (
    <>
      <Center
        bg="#4B3265"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
        p="3"
        pb="4"
      >
        <Box
          minH="100vh"
          bg="#332244"
          py="2rem"
          px="1rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor='#FFDD99'
            color='white'
            size="xl"
          />
        </Box>
      </Center>
    </>
  );
};

export default LoadingScreen;
