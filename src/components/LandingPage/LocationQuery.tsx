import { Center, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { BsArrow90DegRight, BsArrowRight } from 'react-icons/bs';

const LocationQuery = ({setCurrentStep}) => {
    return (
        <Center>
            <Heading as={'h1'} color="#FFDD99">
                Where to decide?
            </Heading>
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
          onClick={() => setCurrentStep(2)}
        >
            <BsArrowRight />
        
        </Button>
        </Center>
    )
}

export default LocationQuery
