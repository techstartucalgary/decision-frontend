import React from 'react';

import {
  Flex,
  Spacer,
  Heading,
  Text,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react';

import { HiBeaker } from 'react-icons/hi';

export default function TechnologiesUsed() {
  return (
    <Flex
      flexDirection="column"
      alignSelf="center"
      bg="#4B3265"
      border="2px"
      width="100%"
      borderColor="#442D5A"
      borderRadius="1rem"
      marginTop="1.25rem"
      boxShadow="lg"
    >
      <Flex
        flexDirecton="row"
        width="88%"
        marginLeft="1.25rem"
        marginTop="1rem"
        paddingBottom="0.5rem"
        borderBottom="2px"
        borderColor="#442D5A"
      >
        <Heading color="#FFDD99" fontSize="1.5rem" fontWeight="medium">
          Technologies Used
        </Heading>
        <Icon
          as={HiBeaker}
          boxSize="1.5rem"
          color="#FFDD99"
          marginLeft="1rem"
          alignSelf="center"
        />
      </Flex>
      <Flex
        flexDirection="row"
        width="88%"
        marginLeft="1.25rem"
        marginTop="0.75rem"
        marginBottom="1.25rem"
      >
        {/* Left column (design/frontend) */}
        <Flex flexDirection="column" width="50%">
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
          >
            Design:
          </Text>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/figma-logo.png"
              alt="Figma Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              Figma
            </Text>
          </Flex>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
            marginTop="1rem"
          >
            Frontend:
          </Text>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/nextjs-logo.png"
              alt="Nextjs Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              Next.js
            </Text>
          </Flex>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/chakra-logo.png"
              alt="Chakra Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              Chakra UI
            </Text>
          </Flex>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/redux-logo.png"
              alt="Redux Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              Redux
            </Text>
          </Flex>
        </Flex>
        <Spacer />
        {/* Right column (backend/links) */}
        <Flex flexDirection="column" width="50%">
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
          >
            Backend:
          </Text>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/express-logo.png"
              alt="Express Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              Express
            </Text>
          </Flex>
          <Flex flexDirection="row" marginTop="0.5rem">
            <Image
              src="/mongodb-logo.png"
              alt="MongoDB Logo"
              width="2.5rem"
              borderRadius="0.5rem"
            />
            <Text
              color="#FFDD99"
              alignSelf="center"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              marginLeft="0.75rem"
            >
              MongoDB
            </Text>
          </Flex>
          <Link
            href="https://github.com/Tech-Start-UCalgary/decision-frontend"
            isExternal
          >
            <Flex
              flexDirection="row"
              width="100%"
              bg="#442D5A"
              border="2px"
              borderColor="#332244"
              borderRadius="0.5rem"
              marginTop="0.75rem"
            >
              <Image
                src="/github-logo-alt1.png"
                alt="Github logo"
                width="2.5rem"
                borderRadius="0.5rem"
                margin="0.5rem"
              />
              <Text
                color="#FFDD99"
                alignSelf="center"
                fontSize="0.75rem"
                fontWeight="bold"
                lineHeight="0.875rem"
              >
                Frontend Repository Link
              </Text>
            </Flex>
          </Link>
          <Link
            href="https://github.com/Tech-Start-UCalgary/decision-backend"
            isExternal
          >
            <Flex
              flexDirection="row"
              width="100%"
              bg="#442D5A"
              border="2px"
              borderColor="#332244"
              borderRadius="0.5rem"
              marginTop="0.5rem"
            >
              <Image
                src="/github-logo-alt1.png"
                alt="Github logo"
                width="2.5rem"
                borderRadius="0.5rem"
                margin="0.5rem"
              />
              <Text
                color="#FFDD99"
                alignSelf="center"
                fontSize="0.75rem"
                fontWeight="bold"
                lineHeight="0.875rem"
              >
                Backend Repository Link
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
