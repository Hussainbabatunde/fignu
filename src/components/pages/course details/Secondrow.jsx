import { Grid, Box, Text, Input, Flex, Select, Checkbox } from '@chakra-ui/react';
import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';

const Secondrow=() => {
    return(<Box d='flex' flexDir='column'>
        <Grid templateColumns='repeat(3, 1fr)' mt='10px'>
            <Box>
                <Text><strong>Upload Video</strong></Text>
                <Box>
                {/* <Text textAlign='center' border='2px dashed #E5E5E5' w='380px' backgroundColor='#F7F8FD' pos='absolute' zIndex='2'>Drag and Drop or <span style={{textDecoration:'underline'}}>browse</span></Text> */}
            <Input type='file' border='2px dashed #E5E5E5' w='380px' backgroundColor='#F7F8FD' outline='none'/>
            </Box>
            </Box>
            <Box ml='70px'>
            <Text><strong>Course Length</strong></Text>
            <Flex>
                <Input type='text' w='80px' backgroundColor='#F7F8FD' border='none' placeholder='0' outline='none'/>
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
        <Flex d='flex' justifyContent='space-between' mt='20px' w='90%'>
            <Box>
                <Checkbox outline='none'>Publish this course online</Checkbox>
            </Box>
            <Box>
                <Checkbox outline='none'>Available for unsubscribed members</Checkbox>
            </Box>
            <Box backgroundColor='#F7F8FD' p='10px'>
                <RiDeleteBin6Line />
            </Box>
        </Flex>
        </Box>
    )
}

export default Secondrow;