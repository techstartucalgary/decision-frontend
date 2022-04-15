import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';

import { MdContentCopy, MdQrCode } from 'react-icons/md';
import QRCode from 'react-qr-code';

export default function LinkGenerationPage() {
  const linkid = useRouter();
  const generatedLink = `https://www.where-to-app.com/${linkid.query.link}`;
  const [copied, setCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minHeight="91vh" bg="#332244" fontFamily="Roboto, sans-serif">
      <Flex direction="column" align="center" mr={{ base: '0', md: '10rem' }}>
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
          <IconButton
            aria-label="get qr code"
            icon={<MdQrCode />}
            borderRadius="12px"
            marginLeft={1}
            width="36px"
            height="36px"
            fontSize="18px"
            bg="#4B3265"
            color="#FFDD99"
            _hover={{
              bg: '#FFDD99',
              color: '#4B3265',
            }}
            onClick={() => onOpen()}
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
        closeOnOverlayClick={true}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          width="90vw"
          borderRadius="30px"
          border="1px"
          borderColor="#332244"
          bg="#4B3265"
          my="auto"
        >
          <ModalBody
            color="#FFDD99"
            fontWeight="regular"
            fontSize="4xl"
            fontFamily="Roboto, sans-serif"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Center my={10}>
              <QRCode value={generatedLink} />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
