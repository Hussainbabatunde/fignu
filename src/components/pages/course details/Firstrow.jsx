import React from 'react';
import { BsImage} from 'react-icons/bs';
import { Flex, Text, Image, Box, Button, Input, FormLabel, Textarea, Grid } from "@chakra-ui/react";



const Firstrow = () => {
    return(
        <Grid d='flex' templateColumns='repeat(2, 1fr)' mt='20px'>
        <Box border='2px dashed #E5E5E5' w='380px' h='200px' borderRadius='3px' backgroundColor='#F7F8FD'>
            <Box mt='40px' ml=' 140px'>
            <BsImage color='#D7D1ED' fontSize='70px' />
            </Box>
            <Text textAlign='center'>Drag and Drop or <span style={{textDecoration:'underline'}}>browse</span></Text>
            <Input type='file' border='none' ml='60px' w='250px'/>
        </Box>
        <Box>
        <Flex flexDir='column'>
            <Text><strong>Course Name</strong></Text>
            <Input type='text' border='none' placeholder='CourseName' backgroundColor='#F7F8FD' w='500px' mr='100px' mt='10px'/>
        </Flex>
        <Flex flexDir='column'>
            <Text mt='15px'><strong>Description</strong></Text>
            <Textarea type='text' border='none' placeholder='CourseName' backgroundColor='#F7F8FD' w='500px' mr='100px' mt='10px' outline='none' h='50px'/>
        </Flex>
        </Box>
    </Grid>
    )
}

export default Firstrow;