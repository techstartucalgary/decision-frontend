import {
  Center,
  Heading,
  HStack,
  Flex,
  IconButton,
  Button,
  Tag,
  Grid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import Link from 'next/link';

const FinalQuery = () => {
  const [selectedBudget, setSelectedBudget] = useState(1);
  return (
    <Center flexDirection={'column'}>
      <Heading as={'h2'} color="#FFDD99">
        How much to spend?
      </Heading>
      <Flex
        align="center"
        mx="3"
        pb="3"
        role="group"
        color="#FFDD99"
        mt="1.2rem"
      >
        <HStack spacing="0.1rem">
          <IconButton
            size="lg"
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
            size="lg"
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
            size="lg"
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
            fontSize="1rem"
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
      <Heading as={'h2'} color="#FFDD99" mt="3rem">
        What time?
      </Heading>
      <Flex align="center" mx="3" pb="3" role="group" color="#FFDD99">
        <Tag
          fontSize={'1.2rem'}
          p="0.5rem"
          variant="solid"
          color="#FFDD99"
          bg="#644386"
          borderRadius="full"
          mt="1rem"
        >
          12:00 PM
        </Tag>
      </Flex>
      <Heading as={'h2'} color="#FFDD99">
        What interests you?
      </Heading>
      <Grid></Grid>
      <Link href="/linkgeneration">
        <Button bg="#FFDD99" color="#644386" borderRadius={'20px'}>
          Generate Link
        </Button>
      </Link>
    </Center>
  );
};

export default FinalQuery;
