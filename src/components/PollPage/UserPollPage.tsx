import React from 'react';
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
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { BsArrowRight } from 'react-icons/bs';
import { useForm, FormProvider } from 'react-hook-form';

const UserPollPage = ({ id }: any) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: { names: '' },
  });
  const [cookies, setCookie] = useCookies();

  const handleUserRegistration = async (name: any) => {
    const URL = `https://decision-backend-heroku.herokuapp.com/${id}`;

    await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(name),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(async (res) => {
        const data = res;
        console.log(data);
        setCookie('userID', JSON.stringify(data), {
          path: '/',
          maxAge: 10000,
          sameSite: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function onSubmit(data: object) {
    await handleUserRegistration({
      data,
    });
  }
  function onError() {
    console.log('CANNOT SUBMIT FORM');
  }

  return (
    <FormProvider {...methods}>
      <Box bg="#332244" minH="100vh" fontFamily="Roboto, sans-serif">
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
                onClick={methods.handleSubmit(onSubmit, onError)}
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

export default UserPollPage;
