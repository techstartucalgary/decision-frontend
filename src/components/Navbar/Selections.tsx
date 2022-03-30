import { Flex, Text, Tag, HStack, IconButton } from '@chakra-ui/react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { setFormStep } from '../../slices/formStepSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';

const Selections = () => {
  const name = useAppSelector((state) => state.formName.value);
  const budget = useAppSelector((state) => state.formBudget.value);
  const interests = useAppSelector((state) => state.formInterests.value);

  const dispatch = useAppDispatch();

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
        <Text fontSize="1rem" onClick={() => dispatch(setFormStep(0))}>
          Name
        </Text>
      </Flex>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Tag
          boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
          size="xl"
          color="#FFDD99"
          bg="#644386"
          borderRadius="full"
          px="4"
          py="2"
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
            aria-label="Budget 1"
            color={budget > 0 ? '#FFDD99' : '#644386'}
            icon={<BsCurrencyDollar />}
          />
          <IconButton
            colorScheme="#FFDD99"
            color={budget > 1 ? '#FFDD99' : '#644386'}
            aria-label="Budget 2"
            icon={<BsCurrencyDollar />}
          />
          <IconButton
            colorScheme="#FFDD99"
            color={budget > 2 ? '#FFDD99' : '#644386'}
            aria-label="Budget 3"
            icon={<BsCurrencyDollar />}
          />
          <Tag
            fontSize="0.2rem"
            color={budget == 0 ? '#FFDD99' : '#644386'}
            bg="transparent"
            p="2"
          >
            Ignore Budget
          </Tag>
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
        <Flex flexWrap="wrap">
          {interests.map((interest) => (
            <Tag
              display={interest.selected ? 'block' : 'none'}
              key={interest.id}
              rightIcon={<ChevronRightIcon />}
              size="lg"
              variant="solid"
              color="#FFDD99"
              bg="#644386"
              px="1.5rem"
              py="0.5rem"
              borderRadius="full"
              m="0.1rem"
              boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
            >
              {interest.name}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Selections;
