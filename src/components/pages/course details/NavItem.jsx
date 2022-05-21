import React from "react";
import { Flex, Text, Divider, Icon, Avatar, Link, Menu, MenuButton } from "@chakra-ui/react";



const NavItem= ({icon, title, mt, pt, navSize, setNavsize, active}) => {
    return(
        <Flex  w='100%' h='50px' pt={pt} pl={navSize==='small'? '30%':'15%'} mt={mt} d='flex' flexDir='column' alignItems='flex-start'>
            <Menu placement='right'>
                <Link
                
                _hover={{textDecoration: 'none'}}>
                <MenuButton w='100%'>
                 <Flex mt='5px' flexDir={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl:'row',
            base:'column'
            }}>
                    <Icon background='none' _hover={{background: 'none'}} as={icon} fontSize='25px' color={active ? 'white':'gray'} mt='7px'/>
                    <Text color={active ? 'white':'gray'} ml={{
            sm: '1',
            md: '3',
            lg: '3',
            xl:'3',
            base:'1'
            }} pt='2' display={navSize==='small' ? 'none': 'block'} fontSize={{
            sm: '10px',
            md: '18px',
            lg: '25px',
            xl:'25px',
            base:'10px'
            }}>{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
            
            </Flex>
    )
}

export default NavItem;