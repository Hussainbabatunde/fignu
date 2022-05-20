import { Grid, Box, Text, Input, Flex, Select, Checkbox } from '@chakra-ui/react';
import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';

const Secondrow=() => {
    return(<Box d='flex' flexDir='column'>
        <Grid templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl:'repeat(3, 1fr)',
            base:'repeat(1, 1fr)'
            }} mt='10px'>
            <Box>
                <Text><strong>Upload Video</strong></Text>
                <Box>
                {/* <Text textAlign='center' border='2px dashed #E5E5E5' w='380px' backgroundColor='#F7F8FD' pos='absolute' zIndex='2'>Drag and Drop or <span style={{textDecoration:'underline'}}>browse</span></Text> */}
            <Input type='file' border='2px dashed #E5E5E5' w={{
            sm: '310px',
            md: '400px',
            lg: '380px',
            xl:'380px',
            base:'310px'
            }} backgroundColor='#F7F8FD' outline='none'/>
            </Box>
            </Box>
            <Box ml={{
            sm: '10px',
            md: '70px',
            lg: '70px',
            xl:'70px',
            base:'10px'
            }}>
            <Text><strong>Course Length</strong></Text>
            <Flex>
                <Input type='text' w={{
            sm: '50px',
            md: '80px',
            lg: '80px',
            xl:'80px',
            base:'50px'
            }} backgroundColor='#F7F8FD' border='none' placeholder='0' outline='none'/>
                <Text mt='8px' ml='20px'><strong>Minutes</strong></Text>
            </Flex>
            </Box>
            <Box>
            <Text><strong>Export</strong></Text>
            <Select placeholder='Select an export' w='230px' border='none' outline='none' backgroundColor='#F7F8FD'>
                <option>Footwears</option>
            </Select>
            </Box>
        </Grid>
        <Flex d='flex' flexDir={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl:'row',
            base:'column'
            }} justifyContent='space-between' mt='20px' w='90%'>
            <Box>
                <Checkbox outline='none'>Publish this course online</Checkbox>
            </Box>
            <Box>
                <Checkbox outline='none'>Available for unsubscribed members</Checkbox>
            </Box>
            <Box backgroundColor='#F7F8FD' p='10px' w={{
            sm: '30px',
            base:'30px'
            }}>
                <RiDeleteBin6Line />
            </Box>
        </Flex>
        </Box>
    )
}

export default Secondrow;