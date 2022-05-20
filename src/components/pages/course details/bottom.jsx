import { Box, Button, Text, Flex, Link } from '@chakra-ui/react';
import React from 'react';


const Bottom = () => {
    return(
        <Box backgroundColor='#F7F8FD' w={{
            sm: '90%',
            md: '95%',
            lg: '100%',
            xl:'100%',
            base:'90%'
            }} mt='15px'>
            <Flex d='flex' justifyContent='space-between' w='90%' ml='5%' pt='20px'>
            <Text fontSize='25px'><strong>Lessons:</strong></Text>
            <Button backgroundColor='#75FA92'>+ Add Lesson</Button>
            </Flex>
            <Flex w='90%'  mt='10px' h='130px'  d='flex' justifyContent='center' alignItems='center' ml='5%' backgroundColor='#E5E5E5' >
                <Link>Create the first lesson</Link>
            </Flex>
        </Box>
    )
}

export default Bottom;