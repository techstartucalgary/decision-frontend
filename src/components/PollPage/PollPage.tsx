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
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import useSWR, { mutate, useSWRConfig } from 'swr';

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const PollPage = ({ id }: any) => {
  const [selected, setSelected] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [votedLocations, setVotedLocations] = useState<String[]>([]);
  const handleVote = (oid : string) => {
    setVotedLocations(votedLocations.concat(oid))
  }
  let totalParticipants = 10;
  const { data, error } = useSWR(
    `http://localhost:3000/${id}/getPolls`,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const updateVotes = async () => {
    const sessionData = {
      memberName: 'Nemanja',
      locationIds: votedLocations,
    };
    fetch(`http://localhost:3000/${id}/addVotes`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessionData),
    })
      .then((res) => res.text())
      .then(async (res) => {
        console.log(res);
        onOpen();
        mutate(`http://localhost:3000/${id}/getPolls`);
        setVotedLocations([]);
      });
  };

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
          color="primary.100"
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
        <Accordion maxWidth="500px" mb="3rem">
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
                  my="1rem"
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
                    fill={`${votedLocations.includes(data.locationID) ? 'primary.100' : '#332244'}`}
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
                    value={(data.votes / totalParticipants) * 100}
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
                  {data.type}
                </Heading>
                <Heading fontSize="0.75rem" color="primary.100" mb="0.5rem">
                  {data.location} | {data.distance}
                </Heading>
                <Heading fontSize="0.75rem" color="primary.100">
                  {data.description}
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
                      {data.rating}
                    </Text>
                    <StarRatings
                      rating={data.rating}
                      starRatedColor="#FFDD99"
                      starEmptyColor="#332244"
                      numberOfStars={5}
                      starDimension="1rem"
                      starSpacing="0.2px"
                    />
                  </HStack>
                  <Heading fontSize="0.75rem" color="primary.100" ml="auto">
                    {data.reviews} Reviews
                  </Heading>
                </HStack>
                {/* <HStack>
                  add avatars for ppl that voted
                </HStack> */}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {/* <Button
          borderRadius="24px"
          bg="#4B3265"
          color="primary.100"       MVP ???
          fontWeight="bold"
          mb='3.5rem'
          fontFamily="Roboto"
          fontSize="1.125rem"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
          leftIcon={<BsPlus />}
        >
          Add Custom Venue
        </Button> */}
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
          border="2px solid #332244"
          borderRadius="18px"
          color="primary.100"
          fontWeight="bold"
          fontFamily="Roboto"
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
              fontFamily={'Roboto'}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text ml="auto">Vote Sent</Text>
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
