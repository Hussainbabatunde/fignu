import { Grid, Image, Box, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import smile from '../../images/smile.png';
import {BsDot, BsPencil} from 'react-icons/bs';


const Card= () =>{
    return(
        <Grid templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl:'repeat(3, 1fr)',
            base:'repeat(1, 1fr)'
            }} mt='10px'>
            <Box backgroundColor='white' w='300px' borderRadius='5px'  mb='10px'>
                <Image src={smile} w='85%' h='150px'  ml='7.5%' mt='20px'/>
                <Text mt='10px' w='85%' ml='7.5%' fontSize='18px'><strong>The most powerful female traders of all time</strong></Text>
                <Text w='85%' mt='5px'ml='7.5%' lineHeight='20px'>Donec sed odio dui vestigulum ligula porta a ante venen dapibus posue velit aliquet dolor sit amet consetetur.</Text>
                <Flex d='flex' flexDir='row'  w='85%' ml='7.5%' >
                    {/* <BsDot color='#28BD49'fontSize='40px'/> */}
                    <Box w='10px' h='10px' backgroundColor='#28BD49' borderRadius='50%' mt='7px'></Box>
                    <Text color='#28BD49' ml='5px'>Course online</Text>
                </Flex>
                <Button mt='15px'ml='7.5%' mb='10px'>
                    <BsPencil/>
                    <Text ml='10px'>Edit</Text>
                </Button>
            </Box>
            
        </Grid>
    )
}

export default Card;