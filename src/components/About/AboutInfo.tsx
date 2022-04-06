import React from 'react';

import { Box, Flex, Spacer, Heading, Center, Image } from '@chakra-ui/react';

import ElevatorPitch from './ElevatorPitch';
import TechnologiesUsed from './TechnologiesUsed';
import Contributors from './Contributors';

export default function AboutInfo() {
  return (
    <Box bg="#332244" minW="100vw" minH="100vh">
      {/* Page title */}
      <Center bg="#4B3265" width="100%" height="6rem">
        <Heading color="#FFDD99" fontSize="2.5rem" fontWeight="bold">
          What is this?
        </Heading>
      </Center>

      {/* Page contents */}
      <Flex flexDirection="column" width="100%">
        <ElevatorPitch />
        <TechnologiesUsed />
        <Contributors />

        {/* Footer */}
        <Flex
          flexDirection="row"
          alignSelf="center"
          width="90%"
          marginTop="1.25rem"
          marginBottom="3rem"
        >
          <Image
            src="/tech-start-logo.png"
            alt="TechStart Logo"
            width="47%"
            borderRadius="1rem"
          />
          <Spacer />
          <Image
            src="/ucalgary-logo.png"
            alt="UCalgary Logo"
            width="47%"
            borderRadius="1rem"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
