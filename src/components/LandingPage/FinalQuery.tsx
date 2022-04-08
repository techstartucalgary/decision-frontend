import React from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  SlideFade,
} from '@chakra-ui/react';

import { useFormContext } from 'react-hook-form';
import { setFormBudget } from '../../slices/formBudgetSlice';
import { toggleInterest } from '../../slices/formInterestsSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';

export default function PreferencesPage() {
  const [cookies, setCookie, removeCookie] = useCookies([`userID`]);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useFormContext();

  const dispatch = useAppDispatch();
  const budget = useAppSelector((state) => state.formBudget.value);
  const interests = useAppSelector((state) => state.formInterests.value);
  const step = useAppSelector((state) => state.formStep.value);

  const interestButtons = interests.map(
    (interest: {
      id: number;
      name: string;
      width: string;
      selected: boolean;
    }) => {
      if (interest.id === 0) {
        return (
          <Center
            width="6.75rem"
            height="2.25rem"
            marginRight="1rem"
            marginTop="1rem"
            borderRadius="1rem"
            bgGradient="linear(to-r, #644386, #FFC655)"
          >
            <Button
              key={interest.name}
              width="6.5rem"
              height="2rem"
              borderRadius="0.875rem"
              bg={interest.selected ? `#FFDD99` : `#4B3265`}
              _hover={{ bg: interest.selected ? `#FFDD99` : `#4B3265` }}
              onClick={() => {
                dispatch(toggleInterest(interest.id));
              }}
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color={interest.selected ? `#644386` : `#FFDD99`}
                bgGradient={
                  interest.selected
                    ? `linear(to-r, #584386, #FF8753)`
                    : `linear(to-r, #FFDD99, #FFDD99)`
                }
                bgClip="text"
              >
                {interest.name}
              </Text>
            </Button>
          </Center>
        );
      } else {
        return (
          <Button
            key={interest.name}
            width={interest.width}
            height="2.25rem"
            marginRight="1rem"
            marginTop="1rem"
            borderRadius="1rem"
            bg={interest.selected ? `#FFDD99` : `#644386`}
            _hover={{ bg: interest.selected ? `#FFDD99` : `#644386` }}
            onClick={() => {
              dispatch(toggleInterest(interest.id));
            }}
          >
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={interest.selected ? `#644386` : `#FFDD99`}
            >
              {interest.name}
            </Text>
          </Button>
        );
      }
    },
  );

  async function onSubmit(data: object) {
    removeCookie(`userID`);
    // Get list of interests
    const selected_interests: string[] = [];
    for (let i = 0; i < interests.length; i++) {
      if (interests[i].selected) {
        selected_interests.push(interests[i].name);
      }
    }

    const session_id = await getLink({
      ...data,
      activities: selected_interests,
    });

    // DO SOMETHING WITH session_id
    console.log(session_id);
    router.push({
      pathname: `linkgeneration`,
      query: { link: session_id },
    });
  }

  function onError() {
    console.log(`CANNOT SUBMIT FORM`);
  }

  async function getLink(data: object) {
    const URL = `https://decision-backend-heroku.herokuapp.com/`;
    let session_id = ``;
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(async (res) => {
        session_id = res.linkId;
        const data = res;
        console.log(data);
        setCookie('userID', JSON.stringify(data.userId), {
          path: '/',
          maxAge: 10000,
          sameSite: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    return session_id;
  }

  return (
    <SlideFade in={step >= 1}>
      <Box bg="#332244" minH="100vh" fontFamily="Roboto, sans-serif">
        <Flex flexDirection="column" minH="80vh" alignItems="center">
          <Box width="100vw">
            <Flex
              direction="column"
              align={{ base: 'left', md: 'center' }}
              justifyContent="left"
              marginTop="3.25rem"
              marginLeft="2rem"
            >
              <Heading
                color="#FFDD99"
                fontSize="3xl"
                fontWeight="medium"
                paddingBottom="0px"
              >
                How much to spend?
              </Heading>
              <Flex
                flex-direction="row"
                alignItems="center"
                justifyContent="space-between"
                marginTop="1.25rem"
              >
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Flex>
                    <Text
                      color={budget >= 1 ? '#FFDD99' : '#644386'}
                      fontSize="7xl"
                      fontWeight="regular"
                      lineHeight="48px"
                      marginRight="0.5rem"
                      onClick={() => {
                        methods.setValue('budget', '1');
                        dispatch(setFormBudget(1));
                      }}
                      cursor="pointer"
                      _hover={{
                        color: '#FFDD99',
                      }}
                      {...methods.register('budget')}
                    >
                      $
                    </Text>
                    <Text
                      color={budget >= 2 ? '#FFDD99' : '#644386'}
                      fontSize="7xl"
                      fontWeight="regular"
                      lineHeight="48px"
                      marginRight="0.5rem"
                      marginLeft="2px"
                      onClick={() => {
                        methods.setValue('budget', '2');
                        dispatch(setFormBudget(2));
                      }}
                      cursor="pointer"
                      _hover={{
                        color: '#FFDD99',
                      }}
                      {...methods.register('budget')}
                    >
                      $
                    </Text>
                    <Text
                      color={budget >= 3 ? '#FFDD99' : '#644386'}
                      fontSize="7xl"
                      fontWeight="regular"
                      lineHeight="48px"
                      marginLeft="2px"
                      onClick={() => {
                        methods.setValue('budget', '3');
                        dispatch(setFormBudget(3));
                      }}
                      cursor="pointer"
                      _hover={{
                        color: '#FFDD99',
                      }}
                      {...methods.register('budget')}
                    >
                      $
                    </Text>
                    <Text
                      color="#FFDD99"
                      fontSize="7xl"
                      fontWeight="regular"
                      lineHeight="48px"
                      ml={{ base: '4rem', md: '3rem' }}
                      mr={{ base: '4rem', md: '0' }}
                      onClick={onOpen}
                      cursor="pointer"
                    >
                      ?
                    </Text>
                  </Flex>
                  <Text
                    color={budget === 0 ? '#FFDD99' : '#644386'}
                    fontSize="lg"
                    fontWeight="medium"
                    mt={{ base: '1.5rem', md: '0.7rem' }}
                    onClick={() => {
                      methods.setValue('budget', '0');
                      dispatch(setFormBudget(0));
                    }}
                    cursor="pointer"
                    _hover={{
                      color: '#FFDD99',
                    }}
                    {...methods.register('budget')}
                  >
                    Ignore budget
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              align={{ base: 'left', md: 'center' }}
              marginTop="6.5rem"
              marginLeft="2rem"
              marginRight="1.5rem"
            >
              <Heading
                color="#FFDD99"
                fontSize="3xl"
                fontWeight="medium"
                marginBottom="0.25rem"
              >
                What interests you?
              </Heading>
              <Flex flexWrap="wrap" maxW={{ base: '80vw', md: '400px' }}>
                {interestButtons}
              </Flex>
              {/* <Editable
                bg="#644386"
                color="#FFDD99"
                height="2.25rem"
                width="80vw"
                maxWidth="17.75rem"
                borderRadius="1rem"
                placeholder="Not here? Type here"
                fontSize="sm"
                fontWeight="regular"
                marginTop="2.25rem"
                paddingLeft="1.25rem"
                lineHeight="200%"
                border="1px"
                borderColor="#FFDD99"
              >
                <EditablePreview />
                <EditableInput />
              </Editable> */}
            </Flex>
          </Box>
          {/*
          <Spacer />
          <Box
            width="100%"
            align="center"
            bg="#332244"
            paddingBottom="4vh"
            paddingTop="6vh"
          >
            <Button
              bg="#FFDD99"
              height="36px"
              width="144px"
              borderRadius="16px"
              _hover={{ bg: '#FFDD99' }}
              onClick={methods.handleSubmit(onSubmit, onError)}
            >
              <Text color="#644386" fontSize="md" fontWeight="bold">
                Generate Link
              </Text>
            </Button>
          </Box>
          */}
          <Spacer />
          <Box height="6rem" />
          <Center
            position="fixed"
            left="0"
            bottom="0"
            width="100vw"
            height="5rem"
            bg="#4B3265"
          >
            <Center
              width="12.875rem"
              height="3.375rem"
              borderRadius="1.6875rem"
              bgGradient="linear(to-r, #644386, #FFC655)"
            >
              <Button
                width="12.5rem"
                height="3rem"
                borderRadius="1.5rem"
                bg="#FFDD99"
                _hover={{ bg: '#FFDD99' }}
                onClick={methods.handleSubmit(onSubmit, onError)}
              >
                <Text fontSize="1.5rem" fontWeight="bold" color="#332244">
                  Generate Link
                </Text>
              </Button>
            </Center>
          </Center>
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
            top="12vh"
          >
            <ModalBody
              color="#FFDD99"
              fontWeight="regular"
              fontSize="sm"
              fontFamily="Roboto, sans-serif"
              textAlign="left"
              margin="3vw 0vw 0vw"
            >
              Select a budget rating ($ to $$$) to specify the cost of the
              venue's recommended to you. Each venue's cost comes from Google
              and there is no direct numerical translation from dollars to a
              cost rating. Typically, "$" refers to an "inexpensive" venue,
              while "$$" refers to a "moderately expensive" venue, and "$$$"
              refers to an "expensive" venue. For example, selecting "$$" means
              that only venues that cost "$$" will be recommended.
            </ModalBody>
            <ModalBody
              color="#FFDD99"
              fontWeight="regular"
              fontSize="sm"
              fontFamily="Roboto, sans-serif"
              textAlign="left"
              margin="0vw 0vw 3vw"
            >
              Alternatively, select "Ignore budget" to not filter the generated
              recommendations based on cost (you will receive recommendations
              that cost either "$", "$$", or "$$$").
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </SlideFade>
  );
}
