import {
  Center,
  Editable,
  Flex,
  EditablePreview,
  EditableInput,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrow90DegRight, BsArrowRight } from 'react-icons/bs';
import FinalQuery from './FinalQuery';
import PreferencesPage from '../PreferencesPage/PreferencesPage';
import LocationQuery from './LocationQuery';

const LandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Box bg="#332244" minH="100vh">
      <Center flexDirection={'column'} minH="80vh">
        {currentStep == 0 ? (
          <>
            <Heading
              as="h1"
              size="4xl"
              fontSize={'5rem'}
              color="#FFDD99"
              letterSpacing={'2px'}
            >
              Hello
            </Heading>
            <Flex
              width="100%"
              alignItems={'center'}
              justifyContent={'center'}
              marginTop={'5rem'}
            >
              <Editable
                placeholder="Your name here"
                variant="solid"
                color="#FFDD99"
                bg="#644386"
                borderRadius="full"
                px="4"
                width="60%"
                maxWidth={'400px'}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
              <Button
                borderRadius={'30px'}
                size="sm"
                marginLeft={'1rem'}
                bg="#644386"
                color="#FFDD99"
                _hover={{
                  bg: '#FFDD99',
                  color: 'white',
                }}
                onClick={() => setCurrentStep(1)}
              >
                <BsArrowRight />
              </Button>
            </Flex>
          </>
        ) : currentStep == 1 ? (
          <FinalQuery />
        ) : (
          <></>
        )}
      </Center>
    </Box>
  );
};

export default LandingPage;
