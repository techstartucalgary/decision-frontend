import React from 'react';

import {
  Flex,
  Heading,
  Text,
  Icon,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';

import { HiUsers } from 'react-icons/hi';

export default function Contributors() {
  return (
    <Flex
      flexDirection="column"
      alignSelf="center"
      bg="#4B3265"
      border="2px"
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
        This website was developed by a team of students at the University of
        Calgary's TechStart software development club.
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
          Nemanja Grujic (Frontend Lead)
        </ListItem>
        <ListItem
          color="#FFDD99"
          fontSize="0.875rem"
          lineHeight="1.125rem"
          width="88%"
          marginLeft="1.25rem"
        >
          Nolan Chan (Designer/Frontend Developer)
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
          Naveed Aria (Backend Lead)
        </ListItem>
        <ListItem
          color="#FFDD99"
          fontSize="0.875rem"
          lineHeight="1.125rem"
          width="88%"
          marginLeft="1.25rem"
        >
          Lubaba Sheikh (Backend Developer)
        </ListItem>
        <ListItem
          color="#FFDD99"
          fontSize="0.875rem"
          lineHeight="1.125rem"
          width="88%"
          marginLeft="1.25rem"
        >
          Noman Sanjari (Backend Developer)
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
        From left to right: Vivian Huynh, Minhazur Rahman, Nemanja Grujic, Nolan
        Chan, Naveed Aria, Lubaba Sheikh, Noman Sanjari. (Not Pictured: Mikail
        Munir)
      </Text>
    </Flex>
  );
}
