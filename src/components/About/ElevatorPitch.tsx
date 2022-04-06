import React from 'react';

import { Flex, Heading, Text, Icon } from '@chakra-ui/react';

import { HiPresentationChartBar } from 'react-icons/hi';

export default function ElevatorPitch() {
  return (
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
        everyone is conflicted on what to do? Or, maybe no one knows what to do
        and you need some ideas presented to you in an organized format, which
        also match everyone's needs and wants?
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
        That is what this website aims to solve! One person in the group selects
        how much you all want to spend, and what you're interesting in doing
        (for example, dining). Afterwards, a link is generated where you and
        your friends can vote on a selection of venues generated from Google's
        location API.
      </Text>
    </Flex>
  );
}
