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

import { BsArrowRight } from 'react-icons/bs';

import { useForm, FormProvider } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { setFormName } from '../../slices/formNameSlice';

const NamePollPage = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: { names: '', budget: '1' },
  });

  const dispatch = useDispatch();

  return (
    <FormProvider {...methods}>
      <Box bg="#332244" minH="100vh">
        <Center flexDirection={'column'} minH="80vh">
          <Box width="100vw">
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
                  {...methods.register('names', {
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
                onClick={() => {
                  dispatch(setFormName(methods.getValues('names')));
                }}
                disabled={!methods.formState.isValid}
              >
                <BsArrowRight />
              </Button>
            </Flex>

            {/* "Hacky" way of displaying message for user to enter in their name */}
            <Flex
              flexDirection="row"
              width="100%"
              alignItems={'center'}
              justifyContent={'center'}
              marginTop="0.25rem"
            >
              <Box width="8"></Box>
              {methods.formState.errors.names && (
                <Text
                  color="#FFDD99"
                  fontSize="0.625rem"
                  width="60%"
                  maxWidth={'400px'}
                >
                  {methods.formState.errors.names.message}
                </Text>
              )}
              <Box width="2.25rem" marginLeft="1rem"></Box>
            </Flex>
          </Box>
        </Center>
      </Box>
    </FormProvider>
  );
};

export default NamePollPage;
