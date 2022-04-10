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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';

import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import useSWR, { mutate, useSWRConfig } from 'swr';
import { withCookies, useCookies } from 'react-cookie';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

const PollPage = ({ id }: any) => {
  const [cookies, setCookie] = useCookies();
  const [response, setResponse] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [votedLocations, setVotedLocations] = useState<string[]>([]);
  const handleVote = (oid: string) => {
    setVotedLocations(votedLocations.concat(oid));
  };
  const { data, error } = useSWR(
    `https://decision-backend-heroku.herokuapp.com/${id}/getPolls`,
    fetcher,
  );

  if (error) return <ErrorScreen />;
  if (!data) return <LoadingScreen />;

  const updateVotes = async () => {
    const sessionData = {
      userId: cookies.userID,
      locationIds: votedLocations,
    };
    console.log(votedLocations);
    fetch(`https://decision-backend-heroku.herokuapp.com/${id}/addVotes`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessionData),
    })
      .then((res) => res.text())
      .then(async (res) => {
        setResponse(res);
        onOpen();
        mutate(`https://decision-backend-heroku.herokuapp.com/${id}/getPolls`);
        setVotedLocations([]);
      });
  };

  return (
    <>
      <Center bg="#4B3265" p="3" pb="4" fontFamily="Roboto, sans-serif">
        <Heading
          as="h1"
          fontSize={'2.25rem'}
          color="primary.100"
          fontFamily="Roboto, sans-serif"
          fontWeight={500}
          lineHeight={'42px'}
          mr={{ base: '0', md: '10rem' }}
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
        <Accordion
          maxWidth="500px"
          w="100%"
          mb="3rem"
          mr={{ base: '0', md: '10rem' }}
        >
          {data.map((data: any, index: any) => (
            <AccordionItem
              key={index}
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
                <VStack
                  p="1rem"
                  my="0rem"
                  borderRight="1px"
                  borderColor="#332244"
                >
                  <Text fontSize="1.2rem" fontWeight="bold" color="primary.100">
                    {data.votes}
                  </Text>

                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6`}
                    _hover={{
                      fill: 'primary.100',
                    }}
                    fill={`${
                      votedLocations.includes(data.locationID)
                        ? 'primary.100'
                        : '#332244'
                    }`}
                    viewBox="0 0 24 24"
                    stroke="none"
                    width="8"
                    height="8"
                    onClick={() => {
                      handleVote(data.locationID);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </Icon>
                </VStack>
                <VStack px="1rem" width="100%">
                  <Heading fontSize="1.125rem" color="primary.100" mb="1rem">
                    {data.locationName}
                  </Heading>
                  <Progress
                    value={
                      data.votes > 0
                        ? (data.votes / data.members.length) * 100
                        : 0
                    }
                    colorScheme="primary"
                    size="md"
                    width="100%"
                    borderRadius="26px"
                    bg="#332244"
                  />
                </VStack>

                <AccordionIcon color="primary.100" fontSize="3rem" />
              </AccordionButton>
              <AccordionPanel>
                <Heading fontSize="0.75rem" color="primary.100" mb="0.2rem">
                  {data.locationDetails.address}
                </Heading>
                <Heading fontSize="0.75rem" color="primary.100" mb="0.5rem">
                  {data.locationDetails.website}
                </Heading>
                <Heading fontSize="0.75rem" color="primary.100">
                  Tags: {data.locationDetails.type}
                </Heading>

                <HStack
                  justifyContent="space-around"
                  borderTop="2px"
                  borderColor="#332244"
                  mt="0.7rem"
                  pt="0.5rem"
                >
                  <HStack mr="auto">
                    <Text fontSize="1rem" color="primary.100" mt="2.5px">
                      {data.locationDetails.rating}
                    </Text>
                    <StarRatings
                      rating={data.locationDetails.rating}
                      starRatedColor="#FFDD99"
                      starEmptyColor="#332244"
                      numberOfStars={5}
                      starDimension="1rem"
                      starSpacing="0.2px"
                    />
                  </HStack>
                  <Heading fontSize="0.75rem" color="primary.100" ml="auto">
                    {data.locationDetails.reviews} Reviews
                  </Heading>
                </HStack>
                <HStack mt="1rem" overflowX="scroll">
                  <AvatarGroup>
                    {data.members.map((index: string) => (
                      <Avatar
                        key={index}
                        name={index}
                        borderWidth="1px"
                        borderColor="#332244"
                        size="sm"
                      />
                    ))}
                  </AvatarGroup>
                </HStack>

                <HStack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="1rem"
                  borderTop="2px"
                  borderColor="#332244"
                  pt="0.7rem"
                >
                  <Button
                    bg="#644386"
                    border="1px solid #332244"
                    borderRadius="2rem"
                    color="primary.100"
                    fontWeight="bold"
                    fontFamily="Roboto, sans-serif"
                    fontSize="1rem"
                    h="2rem"
                    _hover={{
                      bg: '#644386',
                      color: 'white',
                    }}
                  >
                    View On Map
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
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
          onClick={() => {
            updateVotes();
          }}
          bg="#644386"
          border="1.5px solid #332244"
          borderRadius="18px"
          color="primary.100"
          fontWeight="bold"
          fontFamily="Roboto, sans-serif"
          fontSize="1.125rem"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
        >
          Send Vote
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          blockScrollOnMount={true}
          closeOnOverlayClick={true}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent
            width="90vw"
            borderRadius="30px"
            border="1px"
            borderColor="#332244"
            bg="#4B3265"
            my="auto"
          >
            <ModalBody
              color="#FFDD99"
              fontWeight="regular"
              fontSize="4xl"
              fontFamily="Roboto, sans-serif"
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text ml="auto">{response}</Text>
              <Button
                background="#4B3265"
                borderColor="#4B3265"
                _hover={{ bg: '#644386', color: 'white' }}
                fontSize="4xl"
                ml="auto"
                onClick={onClose}
              >
                &times;
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default PollPage;
