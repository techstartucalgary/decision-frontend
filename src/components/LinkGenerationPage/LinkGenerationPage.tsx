import React, { useState } from 'react';
import router, { useRouter, withRouter } from 'next/router'
import { Box, Flex, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import Link from 'next/link';

import { MdContentCopy } from 'react-icons/md';

export default function LinkGenerationPage() {
  const linkid = useRouter();
  const generatedLink = `www.decision.ca/${linkid.query.link}`;
  const [copied, setCopied] = useState(false);
  return (
    <Box height="100vh"  bg="#332244">
      <Flex direction="column" align="center">
        <Heading
          color="#FFDD99"
          fontSize="5xl"
          fontWeight="bold"
          width="80vw"
          textAlign="center"
          lineHeight="1.3em"
          marginTop="15vh"
        >
          Share with friends!
        </Heading>
        <Flex direction="row" marginTop="10vh">
          <Text
            bg="#644386"
            color="#FFDD99"
            width="65vw"
            height="36px"
            maxWidth="400px"
            padding="6px 20px"
            fontSize="sm"
            borderRadius="16px 0px 0px 16px"
          >
            {generatedLink}
          </Text>
          <IconButton
          aria-label='copy link'
            icon={<MdContentCopy />}
            borderRadius="0px 16px 16px 0px"
            width="36px"
            height="36px"
            fontSize="18px"
            bg="#4B3265"
            color="#FFDD99"
            _hover={{
              bg: '#FFDD99',
              color: '#4B3265',
            }}
            onClick={() => {navigator.clipboard.writeText(generatedLink);
              setCopied(true)} }
          />
        </Flex>
        {copied &&
        <Text color='primary.500' size='lg' mt='2'>
          Copied to clipboard!
        </Text>
}         
        <Link href={`/${linkid.query.link}`}>
        <Button
          bg="#FFDD99"
          height="36px"
          width="154px"
          borderRadius="16px"
          marginTop="5vh"
          _hover={{ bg: '#FFDD99' }}
          
        >
          <Text color="#644386" fontSize="md" fontWeight="bold">
            Redirect to link
          </Text>
        </Button>
        </Link>
      </Flex>
    </Box>
  );
}
