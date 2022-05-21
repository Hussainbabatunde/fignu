import React, { useState } from "react";
import fignu from '../../images/fingu.png'
import { Flex, Text, MenuButton, IconButton, Menu, Link, Image, Icon } from "@chakra-ui/react";
import {BsSpeedometer2, BsBook, BsPerson, BsStar, BsImage} from 'react-icons/bs';
import {RiListSettingsLine, RiLogoutBoxRLine} from 'react-icons/ri';
import {FiMenu} from 'react-icons/fi';
import NavItem from "./NavItem";

const Sidebar = () => {
    const [navSize, setNavsize] = useState('large');

    const changed= ()=>{
        if(navSize==='small'){
            setNavsize('large')
        }else{
            setNavsize('small')
        }
    }

    return(
        <Flex pos="sticky" h="100vh" w={navSize==='small'? '20%px': "20%"} flexDir="column" backgroundColor="#502BAD">
            <Flex pl='12%' w='100%' d='flex' flexDir={{
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl:'row',
            base:'column'
            }} h='15vh' alignItems='center'>
                <IconButton 
                background='none'
                _hover={{background: 'none'}}
                icon={<FiMenu display={{
                    sm: 'block',
                    md: 'block',
                    lg: 'none',
                    xl:'none',
                    base:'block'
                    }} style={{outline:'none'}}/>}
                color='white'                
                mt={{
                    sm: '20px',
                    md: '20px',
                    lg: '5px',
                    xl:'5px',
                    base:'20px'
                    }}
                onClick={changed}
                />
            <Image src={fignu} display={navSize==='small' ? 'none': 'block'} />
            </Flex>
            <NavItem icon={BsSpeedometer2} navSize={navSize} setNavsize={setNavsize} title='Overview' mt='20px' />
            <NavItem icon={BsBook} title='Courses'  navSize={navSize} active/>
            <NavItem icon={BsPerson} title='Members'  navSize={navSize}/>
            <NavItem icon={BsStar} title='Experts'  navSize={navSize}/>
            <NavItem icon={RiListSettingsLine} title='Settings'  navSize={navSize}/>
            <NavItem icon={RiLogoutBoxRLine} title='Sign Out'  navSize={navSize}/>
                    </Flex>
    )
};

export default Sidebar;