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
  Icon,
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
        py="2rem"
        px="1rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Accordion maxWidth="500px">
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
                <VStack p="1rem">
                  <Text fontSize="1.2rem" fontWeight="bold" color="#FFDD99">
                    {row.votes}
                  </Text>
                  
                    <Icon
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="8" height="8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </Icon>
                  
                </VStack>
                {/* <HStack spacing="6" width="100%" pt="3" pb="4" pr="2">
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
                  </HStack> */}
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
      </Center>
    </>
  );
};

export default PollPage;
