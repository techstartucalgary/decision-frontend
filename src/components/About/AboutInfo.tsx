import React from 'react';

import {
  Box,
  Flex,
  Spacer,
  Heading,
  Center,
  Image,
  Link,
} from '@chakra-ui/react';

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
      <Flex flexDirection="column" width="100%" px="4" maxW="500px" mx="auto">
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
          <Link
            href="https://techstartucalgary.com/"
            width="47%"
            _hover={{ border: '0rem' }}
            isExternal
          >
            <Image
              src="/tech-start-logo.png"
              alt="TechStart Logo"
              borderRadius="1rem"
              boxShadow="lg"
            />
          </Link>

          <Spacer />
          <Image
            src="/whereto-logo-alt4.png"
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
