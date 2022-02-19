import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <Flex
      
      px='4'
      height="20"
      alignItems="center"
      bg="#442D5A"
      borderBottomWidth="1px"
      borderBottomColor="#332244"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
        <IconButton
        display={{ base: 'flex', md: 'none' }}
        
        bg="transparent"
        variant="solid"
        position='absolute'
        aria-label="open menu"
        color="#FFDD99"
        _hover={{
          bg: '#644386',
          color: 'white',
        }}
        icon={<FiMenu />}
      />
      <Link href='/'>
      <Text
      cursor='pointer'
        display={{ base: 'flex', md: 'none' }}
        fontSize='1.125rem'
        fontFamily="Roboto"
        fontWeight="900"
        color="#FFDD99"
        mr='auto'
        ml='auto'
      >
        Decision
      </Text>
      </Link>
    </Flex>
  );
};

export default Navbar2;
