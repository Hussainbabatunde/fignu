import { Flex, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../course details/Sidebar';
import individual from '../../images/individual.png';
import Card from './card';


const Allcourses= () => {

    const Next = () => {

    }


    return(
        <Flex w='100%' d='flex' backgroundColor='#E5E5E5'>
            <Sidebar/>
            <Box d='flex'  w='95%' flexDir='column' mt={5} ml='2.5%' mr='2.5%'>
                <Flex d='flex' justifyContent='space-between'>
                    <Flex>
                    <Text fontSize='22px'><strong>All Courses</strong></Text>
                    </Flex>
                    <Flex d='flex' w='25%' justifyContent='space-between'>
                        <Text>Cancel</Text>
                        <Button onClick={Next} h='30px' backgroundColor="#502BAD" color='white' _hover={{backgroundColor:'none'}}>New courses</Button>
                        <Image src={individual} w='30px' h='30px'/>
                    </Flex>
                </Flex>
                <Card/>
            </Box>
        </Flex>
    )
}

export default Allcourses;