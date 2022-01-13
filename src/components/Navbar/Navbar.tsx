import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tag,
  TagLabel,
  TagRightIcon,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalBody,
} from '@chakra-ui/react';

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiDollarSign,
} from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
  ArrowForwardIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Selections from './Selections';
import LandingPage from '../LandingPage/LandingPage';

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="#332244">
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
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      <LandingPage />
    </Box>
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
      h="full"
      minH="100vh"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="14"
        justifyContent="space-between"
        color="#FFDD99"
      >
        <Text fontSize="24" fontFamily="monospace" fontWeight="bold">
          Decision
        </Text>
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
      <Link href="/about" style={{ textDecoration: 'none' }}>
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
      <Link href="/manual" style={{ textDecoration: 'none' }}>
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
      <Link href="/feedback" style={{ textDecoration: 'none' }}>
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
      bg="#332244"
      borderBottomWidth="1px"
      borderBottomColor="#644386"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        bg="transparent"
        variant="solid"
        aria-label="open menu"
        color="#FFDD99"
        _hover={{
          bg: '#644386',
          color: 'white',
        }}
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color="#FFDD99"
      >
        Decision
      </Text>
    </Flex>
  );
};
