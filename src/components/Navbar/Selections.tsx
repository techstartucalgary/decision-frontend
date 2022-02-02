import React, { useState } from 'react';
import {
  Flex,
  Text,
  Popover,
  Editable,
  EditablePreview,
  EditableInput,
  Tag,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  Button,
  HStack,
  PopoverTrigger,
  PopoverContent,
  ModalCloseButton,
  ModalHeader,
  Lorem,
  IconButton,
} from '@chakra-ui/react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {
  ArrowForwardIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

function createData(id, activity) {
  return { id, activity };
}

const activities = [
  createData(0, 'Everything'),
  createData(1, 'Dining'),
  createData(2, 'Fine Dining'),
  createData(3, 'Shopping'),
  createData(4, 'Outdoors'),
  createData(5, 'Drinks'),
  createData(6, 'Coffee'),
  createData(7, 'Entertainment'),
];

const Selections = () => {
  const [selection, setSelection] = useState('Dining');
  const [selectedBudget, setSelectedBudget] = useState(1);
  let name = 'Nemanja Grujic';
  return (
    <>
      <Flex
        borderTop="1px"
        align="center"
        pt="4"
        pb="1"
        pl="6"
        borderTopColor="#644386"
        role="group"
        color="#FFDD99"
      >
        <Text mx="5" fontSize="1.2rem" fontWeight="bold">
          Your Selections
        </Text>
      </Flex>
      <Flex align="center" p="3" mx="2" role="group" color="#FFDD99">
        <Text fontSize="1rem">Name</Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Tag
          
          size='xl'
          color="#FFDD99"
          bg="#644386"
          borderRadius="full"
          px="4"
          py='2'
        >
          {name}
        </Tag>
      </Flex>
      {/* <Flex
        align="center"
        p="3"
        mx="2"
        role="group"
        color="#FFDD99"
        borderTop="1px"
        borderTopColor="#644386"
      >
        <Text fontSize="1rem">Location</Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Tag
          as={Button}
          size="lg"
          variant="solid"
          color="#FFDD99"
          bg="#644386"
          borderRadius="full"
          _hover={{
            bg: '#644386',
            color: '#FFDD99',
          }}
        >
          Calgary,AB
        </Tag>
        <Modal>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex> */}
      <Flex
        align="center"
        p="3"
        mx="2"
        role="group"
        color="#FFDD99"
        borderTop="1px"
        borderTopColor="#644386"
      >
        <Text fontSize="1rem">Budget</Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <HStack spacing="0.1rem">
          <IconButton
            colorScheme="#FFDD99"
            aria-label="Search database"
            color={selectedBudget > 0 ? '#FFDD99' : '#644386'}
            _hover={{
              bg: '#644386',
              color: '#FFDD99',
            }}
            onClick={() => setSelectedBudget(1)}
            icon={<BsCurrencyDollar />}
          />
          <IconButton
            colorScheme="#FFDD99"
            color={selectedBudget > 1 ? '#FFDD99' : '#644386'}
            aria-label="Search database"
            _hover={{
              bg: '#644386',
              color: '#FFDD99',
            }}
            onClick={() => setSelectedBudget(2)}
            icon={<BsCurrencyDollar />}
          />
          <IconButton
            colorScheme="#FFDD99"
            color={selectedBudget > 2 ? '#FFDD99' : '#644386'}
            aria-label="Search database"
            _hover={{
              bg: '#644386',
              color: '#FFDD99',
            }}
            onClick={() => setSelectedBudget(3)}
            icon={<BsCurrencyDollar />}
          />
          <Button
            fontSize="0.2rem"
            color={selectedBudget == 0 ? '#FFDD99' : '#644386'}
            bg="transparent"
            _hover={{
              bg: '#644386',
              color: '#FFDD99',
            }}
            onClick={() => setSelectedBudget(0)}
          >
            Ignore Budget
          </Button>
        </HStack>
      </Flex>
      {/* <Flex
        align="center"
        p="3"
        mx="2"
        role="group"
        color="#FFDD99"
        borderTop="1px"
        borderTopColor="#644386"
      >
        <Text fontSize="16">Time</Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Tag
          size="lg"
          variant="solid"
          color="#FFDD99"
          bg="#644386"
          borderRadius="full"
        >
          12:00 PM
        </Tag>
      </Flex> */}
      <Flex
        align="center"
        p="3"
        mx="2"
        role="group"
        color="#FFDD99"
        borderTop="1px"
        borderTopColor="#644386"
      >
        <Text fontSize="16">Interests</Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Popover placement="right">
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronRightIcon />}
              size="md"
              variant="solid"
              color="#FFDD99"
              bg="#644386"
              borderRadius="full"
              _hover={{
                bg: '#644386',
                color: 'white',
              }}
            >
              {selection}
            </Button>
          </PopoverTrigger>
          <PopoverContent bg="#4B3265" maxWidth="150px" zIndex="999">
            {activities.map((row) => (
              <Button
                key={row.id}
                size="sm"
                variant="solid"
                color="#FFDD99"
                bg="#644386"
                borderRadius="full"
                m="0.5"
                _hover={{
                  bg: '#644386',
                  color: 'white',
                }}
                onClick={() => setSelection(row.activity)}
              >
                {row.activity}
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </Flex>
    </>
  );
};

export default Selections;
