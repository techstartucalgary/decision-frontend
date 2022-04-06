import React from 'react';

import {
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  SlideFade,
  Divider,
  Icon,
  UnorderedList,
  ListItem,
  Image,
  Link,
} from '@chakra-ui/react';

import { HiPresentationChartBar, HiBeaker, HiUsers } from 'react-icons/hi';

//import Image from 'next/Image';

export default function AboutInfo() {
  return (
    <Box bg="#332244" minW="100vw" minH="100vh">
      <Center bg="#4B3265" width="100%" height="6rem">
        <Heading color="#FFDD99" fontSize="2.5rem" fontWeight="bold">
          What is this?
        </Heading>
      </Center>
      <Flex flexDirection="column" width="100%">
        <Flex
          flexDirection="column"
          alignSelf="center"
          bg="#4B3265"
          width="90%"
          border="2px"
          borderColor="#442D5A"
          borderRadius="1rem"
          marginTop="1.25rem"
        >
          {/* Elevator pitch section */}
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
              Elevator Pitch
            </Heading>
            <Icon
              as={HiPresentationChartBar}
              boxSize="1.5rem"
              color="#FFDD99"
              marginLeft="1rem"
              alignSelf="center"
            />
          </Flex>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.75rem"
          >
            Have you ever been trying to plan a night out with your friends, but
            everyone is conflicted on what to do? Or, maybe no one knows what to
            do and you need some ideas presented to you in an organized format,
            which also match everyone's needs and wants?
          </Text>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.5rem"
            marginBottom="1.25rem"
          >
            That is what this website aims to solve! One person in the group
            selects how much you all want to spend, and what you're interesting
            in doing (for example, dining). Afterwards, a link is generated
            where you and your friends can vote on a selection of venues
            generated from Google's location API.
          </Text>
        </Flex>

        {/* Technologies used section */}
        <Flex
          flexDirection="column"
          alignSelf="center"
          bg="#4B3265"
          width="90%"
          border="2px"
          borderColor="#442D5A"
          borderRadius="1rem"
          marginTop="1.25rem"
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
                    Frontend repository link
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
                    Backend repository link
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        {/* Contributors section */}
        <Flex
          flexDirection="column"
          alignSelf="center"
          bg="#4B3265"
          width="90%"
          border="2px"
          borderColor="#442D5A"
          borderRadius="1rem"
          marginTop="1.25rem"
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
              Contributors
            </Heading>
            <Icon
              as={HiUsers}
              boxSize="1.5rem"
              color="#FFDD99"
              marginLeft="1rem"
              alignSelf="center"
            />
          </Flex>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.75rem"
          >
            This website was developed by a team of students at the University
            of Calgary's TechStart software development club.
          </Text>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="1rem"
          >
            Project Manager:
          </Text>
          <UnorderedList>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Vivian Huynh
            </ListItem>
          </UnorderedList>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.5rem"
          >
            Business Analysts:
          </Text>
          <UnorderedList>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Mikail Munir
            </ListItem>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Minhazur Rahman
            </ListItem>
          </UnorderedList>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.5rem"
          >
            Frontend Developers:
          </Text>
          <UnorderedList>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Nemanja Grujic (frontend lead)
            </ListItem>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Nolan Chan (designer/frontend developer)
            </ListItem>
          </UnorderedList>
          <Text
            color="#FFDD99"
            fontSize="0.875rem"
            fontWeight="bold"
            lineHeight="1.125rem"
            width="88%"
            marginLeft="1.25rem"
            marginTop="0.5rem"
          >
            Backend Developers:
          </Text>
          <UnorderedList>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Naveed Aria (backend lead)
            </ListItem>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Lubaba Sheikh (backend developer)
            </ListItem>
            <ListItem
              color="#FFDD99"
              fontSize="0.875rem"
              lineHeight="1.125rem"
              width="88%"
              marginLeft="1.25rem"
            >
              Noman Sanjari (backend developer)
            </ListItem>
          </UnorderedList>
          <Image
            src="/stock-groupphoto.jpg"
            alt="Team Photo"
            width="88%"
            alignSelf="center"
            border="2px"
            borderColor="#442D5A"
            borderRadius="1rem"
            marginTop="2rem"
          />
          <Text
            color="#FFDD99"
            width="88%"
            fontSize="0.75rem"
            fontStyle="italic"
            lineHeight="0.875rem"
            marginTop="0.75rem"
            marginBottom="1.25rem"
            alignText="center"
            alignSelf="center"
            align="center"
          >
            From left to right: Vivian Huynh, Minhazur Rahman, Nemanja Grujic,
            Nolan Chan, Naveed Aria, Lubaba Sheikh, Noman Sanjari. (Not
            Pictured: Mikail Munir)
          </Text>
        </Flex>

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
