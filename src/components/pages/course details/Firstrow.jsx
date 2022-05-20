import React from 'react';
import { BsImage} from 'react-icons/bs';
import { Flex, Text, Image, Box, Button, Input, FormLabel, Textarea, Grid } from "@chakra-ui/react";



const Firstrow = () => {
    return(
        <Grid  templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl:'repeat(2, 1fr)',
            base:'repeat(1, 1fr)'
            }} mt='20px'>
        <Box border='2px dashed #E5E5E5' w={{
            sm: '310px',
            md: '400px',
            lg: '380px',
            xl:'380px',
            base:'310px'
            }} h='200px' borderRadius='3px' backgroundColor='#F7F8FD'>
            <Box mt='40px' ml=' 140px'>
            <BsImage color='#D7D1ED' fontSize='70px' />
            </Box>
            <Text textAlign='center'>Drag and Drop or <span style={{textDecoration:'underline'}}>browse</span></Text>
            <Input type='file' border='none' ml={{
            sm: '40px',
            md: '60px',
            lg: '60px',
            xl:'60px',
            base:'40px'
            }}  w='250px'/>
        </Box>
        <Box>
        <Flex flexDir='column'>
            <Text><strong>Course Name</strong></Text>
            <Input type='text' border='none' placeholder='CourseName' backgroundColor='#F7F8FD' w={{
            sm: '310px',
            md: '400px',
            lg: '500px',
            xl:'500px',
            base:'310px'
            }}  mr='100px' mt='10px'/>
        </Flex>
        <Flex flexDir='column'>
            <Text mt='15px'><strong>Description</strong></Text>
            <Textarea type='text' border='none' placeholder='CourseName' backgroundColor='#F7F8FD' w={{
            sm: '310px',
            md: '400px',
            lg: '500px',
            xl:'500px',
            base:'310px'
            }} mr='100px' mt='10px' outline='none' h='50px'/>
        </Flex>
        </Box>
    </Grid>
    )
}

export default Firstrow;