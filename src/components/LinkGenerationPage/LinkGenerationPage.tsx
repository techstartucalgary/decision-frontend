import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import Link from 'next/link';

import { MdContentCopy } from 'react-icons/md';

export default function LinkGenerationPage() {
  const linkid = useRouter();
  const generatedLink = `https://decision-frontend-eight.vercel.app/${linkid.query.link}`;
  const [copied, setCopied] = useState(false);
  return (
    <Box minHeight="91vh" bg="#332244" fontFamily="Roboto, sans-serif">
      <Flex direction="column" align="center" mr={{ base: '0', md: '10rem' }}>
        <Heading
          color="#FFDD99"
          fontSize="3rem"
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
            height="2.25rem"
            maxWidth="400px"
            padding="0px 1.25rem"
            fontSize="sm"
            borderRadius="16px 0px 0px 16px"
            lineHeight="250%"
            isTruncated
          >
            {generatedLink}
          </Text>
          <IconButton
            aria-label="copy link"
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
            onClick={() => {
              navigator.clipboard.writeText(generatedLink);
              setCopied(true);
            }}
          />
        </Flex>
        {copied && (
          <Text color="primary.500" size="lg" mt="2">
            Copied to clipboard!
          </Text>
        )}
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
