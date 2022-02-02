import {
  Center,
  Heading,
  Box,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
  Text,
  Progress,
  HStack,
  Flex,
  Button,
  Divider,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import { BsHandThumbsUpFill, BsPlus } from 'react-icons/bs';

function createData(
  id: any,
  name: any,
  votes: any,
  type: any,
  location: any,
  distance: any,
  description: any,
  rating: any,
  reviews: any,
) {
  return {
    id,
    name,
    votes,
    type,
    location,
    distance,
    description,
    rating,
    reviews,
  };
}

const places = [
  createData(
    0,
    'Crowfoot Crossing Cinema',
    8,
    'Movie Theatre',
    '91 Crowfoot Terrace NW',
    '2.6km',
    'Modern multiplex cinema chain screening the latest Hollywood films, plus new independent releases.',
    4.1,
    4651,
  ),
  createData(
    1,
    'Bitter Sisters Brewery',
    5,
    'Restaurant',
    '91 Crowfoot Terrace NW',
    '2.6km',
    'Modern multiplex cinema chain screening the latest Hollywood films, plus new independent releases.',
    3,
    125,
  ),
  createData(
    2,
    'Imax Movie Theatre',
    4,
    'Movie Theatre',
    '91 Crowfoot Terrace NW',
    '2.6km',
    'Modern multiplex cinema chain screening the latest Hollywood films, plus new independent releases.',
    4.6,
    1324,
  ),
];

const PollPage = () => {
  const [selected, setSelected] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let totalParticipants = 10;
  return (
    <>
      <Center
        bg="#4B3265"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
        p="3"
        pb="4"
      >
        <Heading
          as="h1"
          fontSize={'2.25rem'}
          color="#FFDD99"
          fontFamily={'Roboto'}
          fontWeight={500}
          lineHeight={'42px'}
        >
          Time To Decide
        </Heading>
      </Center>
      <Box
        minH="100vh"
        bg="#332244"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py="2rem"
        px="1rem"
      >
        <Flex
          maxW="800px"
          alignItems="center"
          justifyContent="center"
          ml="auto"
          mr="auto"
          flexDirection="column"
        >
          <Accordion width="100%">
            {places.map((row) => (
              <AccordionItem
                key={row.id}
                bg="#4B3265"
                borderRadius="24px"
                border="none"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                my="1.5rem"
              >
                <AccordionButton
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <HStack spacing="6" width="100%" pt="3" pb="4" pr="2">
                    <VStack>
                      <Text
                        color="#FFDD99"
                        fontSize="1.125rem"
                        fontWeight="700"
                        fontFamily="Roboto"
                      >
                        {row.votes}
                      </Text>
                      <IconButton
                        onClick={() => setSelected(true)}
                        aria-label="select"
                        colorScheme="#FFDD99"
                        fontSize="1.6rem"
                        color={selected === true ? '#FFDD99' : '#644386'}
                        _hover={{
                          bg: '#644386',
                          color: '#FFDD99',
                        }}
                        icon={<BsHandThumbsUpFill />}
                      />
                    </VStack>

                    <VStack spacing="4" width="100%">
                      <Heading
                        color="#FFDD99"
                        fontWeight="500"
                        fontSize="1.125rem"
                        textAlign="left"
                      >
                        {row.name}
                      </Heading>
                      <Progress
                        value={(row.votes / totalParticipants) * 100}
                        colorScheme="purple"
                        size="md"
                        width="100%"
                        borderRadius="26px"
                        bg="#332244"
                      />
                    </VStack>
                  </HStack>
                  <AccordionIcon color="#FFDD99" fontSize="3rem" />
                </AccordionButton>
                <AccordionPanel>
                  <Heading fontSize="0.75rem" color="#FFDD99" mb="0.2rem">
                    {row.type}
                  </Heading>
                  <Heading fontSize="0.75rem" color="#FFDD99" mb="0.5rem">
                    {row.location} | {row.distance}
                  </Heading>
                  <Heading fontSize="0.75rem" color="#FFDD99">
                    {row.description}
                  </Heading>
                  <Divider
                    orientation="horizontal"
                    colorScheme="purple"
                    my="0.5rem"
                  />
                  <HStack justifyContent="space-around">
                    <HStack mr="auto">
                      <Text fontSize="1rem" color="#FFDD99" mt="2.5px">
                        {row.rating}
                      </Text>
                      <StarRatings
                        rating={row.rating}
                        starRatedColor="#FFDD99"
                        numberOfStars={5}
                        starDimension="1rem"
                        starSpacing="0.2px"
                      />
                    </HStack>
                    <Heading fontSize="0.75rem" color="#FFDD99" ml="auto">
                      {row.reviews} Reviews
                    </Heading>
                  </HStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Button
            borderRadius="24px"
            bg="#4B3265"
            color="#FFDD99"
            fontWeight="bold"
            fontFamily="Roboto"
            fontSize="1.125rem"
            _hover={{
              bg: '#644386',
              color: 'white',
            }}
            leftIcon={<BsPlus />}
          >
            Add Custom Venue
          </Button>
        </Flex>
      </Box>
      <Center
        bg="#4B3265"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
        p="3"
        pb="4"
        position="fixed"
        left="0"
        bottom="0"
        width="100%"
      >
        <Button
          bg="#644386"
          border="2px solid #332244"
          borderRadius="18px"
          color="#FFDD99"
          fontWeight="bold"
          fontFamily="Roboto"
          fontSize="1.125rem"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
          onClick={onOpen}
        >
          Send Vote
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vote Sent</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Center>
      
    </>
    
  );
};

export default PollPage;
