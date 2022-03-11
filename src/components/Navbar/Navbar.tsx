import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Selections from './Selections';
import Link from 'next/link'


export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='0'>
        {children}
      </Box>
      
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="#4B3265"
      borderRight="1px"
      borderRightColor="#644386"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      zIndex='20'
      h="full"
      
      minH="100vh"
      {...rest}
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.25)"
    >
      <Flex
        h="20"
        alignItems="center"
        mx="14"
        justifyContent="space-between"
        color="#FFDD99"
      >
        <Link href='/'>
        <Text fontSize="24" fontFamily="monospace" fontWeight="bold" cursor={'pointer'}>
          Decision
        </Text>
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Nav />
      <Selections />
    </Box>
  );
};

const Nav = () => {
  return (
    <>
      <Link href="/about">
        <Flex
          align="center"
          borderTop="1px"
          borderTopColor="#644386"
          p="4"
          role="group"
          cursor="pointer"
          color="#FFDD99"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
        >
          <Text fontSize="1rem">What is this?</Text>
        </Flex>
      </Link>
      <Link href="/manual">
        <Flex
          align="center"
          p="4"
          role="group"
          cursor="pointer"
          color="#FFDD99"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
        >
          <Text fontSize="1rem">User Manual</Text>
        </Flex>
      </Link>
      <Link href="/feedback">
        <Flex
          align="center"
          p="4"
          role="group"
          cursor="pointer"
          color="#FFDD99"
          _hover={{
            bg: '#644386',
            color: 'white',
          }}
        >
          <Text fontSize="1rem">Feedback</Text>
        </Flex>
      </Link>
    </>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="#442D5A"
      borderBottomWidth="1px"
      borderBottomColor="#332244"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
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
