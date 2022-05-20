import React from "react";
import { Flex, Text, Image, Box, Button, Input } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import uk from '../../images/uk.png';
import individual from '../../images/individual.png';
import Firstcolumn from "./Firstrow";
import Secondrow from "./Secondrow";
import Bottom from "./bottom";


const Update = () => {
    return(
        <Flex d='flex' w='100%'>
            <Sidebar/>
            <Box d='flex'  w='100%' flexDir='column'>
            <Box d='flex'  w='100%' flexDir='column' mt={5} ml='2.5%' mr='2.5%'>
                <Flex d='flex' justifyContent='space-between'>
                    <Flex>
                    <Image src={uk} w='30px' h='30px'/>
                        <select style={{border: "none" , outline:'none'}}>
                            <option><strong> English</strong></option>
                        </select>
                    </Flex>
                    <Flex d='flex' w='25%' justifyContent='space-between'>
                        <Text>Cancel</Text>
                        <Button h='30px' backgroundColor="#502BAD" color='white' _hover={{backgroundColor:'none'}}>Save Changes</Button>
                        <Image src={individual} w='30px' h='30px'/>
                    </Flex>
                </Flex>
                <Firstcolumn/>
                <Secondrow/>
            </Box>
            <Bottom/>
            </Box>
        </Flex>
    )
}

export default Update;