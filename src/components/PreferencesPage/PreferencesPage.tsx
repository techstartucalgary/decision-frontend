import React from 'react';
import Budget from './Budget';
import Interests from './Interests';

import { Box, Flex, Heading, Text, Button, IconButton } from '@chakra-ui/react';

import { MdContentCopy } from 'react-icons/md';

import Link from 'next/link';

export default function PreferencesPage() {
  return (
    <Box height="100vh" bg="#332244">
      <Budget />
      <Interests />
      <Flex direction="column" align="center">
        <Link href="/linkgeneration">
          <Button
            bg="#FFDD99"
            height="36px"
            borderRadius="16px"
            marginTop="5vh"
            _hover={{ bg: '#FFDD99' }}
          >
            <Text color="#644386" fontSize="md" fontWeight="bold">
              Generate Link
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
