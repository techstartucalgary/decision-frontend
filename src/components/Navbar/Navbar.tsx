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
import Link from 'next/link';

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
      <Box ml={{ base: 0, md: 60 }} p="0">
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
      zIndex="20"
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
        <Link href="/">
          <Text
            fontSize="24"
            fontFamily="monospace"
            fontWeight="bold"
            cursor="pointer"
            whiteSpace="nowrap"
          >
            Where To?
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <Text fontSize="1rem" ml="2">
            What is this?
          </Text>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <Text fontSize="1rem" ml="2">
            User Manual
          </Text>
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
      borderBottomWidth="1.5px"
      borderBottomColor="#332244"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        bg="transparent"
        variant="solid"
        position="absolute"
        aria-label="open menu"
        color="#FFDD99"
        _hover={{
          bg: '#644386',
          color: 'white',
        }}
        icon={<FiMenu />}
      />
      <Link href="/">
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="1.125rem"
          fontFamily="Roboto"
          fontWeight="900"
          color="#FFDD99"
          mr="auto"
          ml="auto"
          cursor="pointer"
        >
          Where To?
        </Text>
      </Link>
    </Flex>
  );
};
