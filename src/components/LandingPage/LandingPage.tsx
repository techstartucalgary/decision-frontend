import {
  Center,
  Editable,
  Flex,
  EditablePreview,
  EditableInput,
  Heading,
  Button,
  Box,
  Text,
  Spacer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import FinalQuery from './FinalQuery';

import { useForm, FormProvider } from 'react-hook-form';

const LandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    mode: 'all',
    defaultValues: { name: '', budget: '1' },
  });
  return (
    <FormProvider {...methods}>
      <Box bg="#332244" minH="100vh">
        <Center flexDirection={'column'} minH="80vh">
          {currentStep >= 0 && (
            <Box width="100vw" display={currentStep !== 0 ? 'none' : 'block'}>
              <Heading
                as="h1"
                size="4xl"
                fontSize={'5rem'}
                color="#FFDD99"
                letterSpacing={'2px'}
                textAlign="center"
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
                  <EditableInput
                    {...methods.register('name', {
                      required: {
                        value: true,
                        message: 'Please enter a name',
                      },
                    })}
                  />
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
                  disabled={!methods.formState.isValid}
                >
                  <BsArrowRight />
                </Button>
              </Flex>

              <Flex
                flexDirection="row"
                width="100%"
                alignItems={'center'}
                justifyContent={'center'}
                marginTop="0.25rem"
              >
                {methods.formState.errors.name && (
                  <Text
                    color="#FFDD99"
                    fontSize="0.625rem"
                    width="60%"
                    maxWidth={'400px'}
                  >
                    {methods.formState.errors.name.message}
                  </Text>
                )}
                <Box width="2.25rem" marginLeft="1rem" bg="#FFDD99"></Box>
              </Flex>

              <Text color="green" marginTop="5rem">
                {JSON.stringify(methods.watch(), null, 2)}
              </Text>
            </Box>
          )}
          {currentStep >= 1 && <FinalQuery />}
        </Center>
      </Box>
    </FormProvider>
  );
};

export default LandingPage;
