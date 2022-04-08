import React from 'react';

import { Box, Flex, Spacer, Heading, Center, Image } from '@chakra-ui/react';

import ElevatorPitch from './ElevatorPitch';
import TechnologiesUsed from './TechnologiesUsed';
import Contributors from './Contributors';

export default function AboutInfo() {
  return (
    <Box bg="#332244" minH="100vh">
      {/* Page title */}
      <Center bg="#4B3265" width="100%" height="6rem">
        <Heading color="#FFDD99" fontSize="2.5rem" fontWeight="bold">
          What is this?
        </Heading>
      </Center>

      {/* Page contents */}
      <Flex
        flexDirection="column"
        width="100%"
        px="4"
        maxW="500px"
        justifyContent="center"
        mx="auto"
      >
        <ElevatorPitch />
        <TechnologiesUsed />
        <Contributors />

        {/* Footer */}
        <Flex
          flexDirection="row"
          alignSelf="center"
          marginTop="1.25rem"
          marginBottom="3rem"
        >
          <Image
            src="/tech-start-logo.png"
            alt="TechStart Logo"
            width="47%"
            borderRadius="1rem"
            boxShadow="lg"
          />
          <Spacer />
          <Image
            src="/ucalgary-logo.png"
            alt="UCalgary Logo"
            width="47%"
            borderRadius="1rem"
            boxShadow="lg"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
