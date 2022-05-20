import React from "react";
import fignu from '../../images/fingu.png'
import { Flex, Text, Divider, IconButton, Avatar, Heading, Image } from "@chakra-ui/react";
import {BsSpeedometer2, BsBook, BsPerson, BsStar, BsImage} from 'react-icons/bs';
import {RiListSettingsLine, RiLogoutBoxRLine} from 'react-icons/ri';
import NavItem from "./NavItem";

const Sidebar = () => {
    return(
        <Flex pos="sticky" h="100vh" w="20%" flexDir="column" backgroundColor="#502BAD">
            <Flex pl='15%' w='100%' h='15vh' alignItems='center'>
            <Image src={fignu} />
            </Flex>
            <NavItem icon={BsSpeedometer2} title='Overview' mt='20px'/>
            <NavItem icon={BsBook} title='Courses'/>
            <NavItem icon={BsPerson} title='Members'/>
            <NavItem icon={BsStar} title='Experts'/>
            <NavItem icon={RiListSettingsLine} title='Settings'/>
            <NavItem icon={RiLogoutBoxRLine} title='Sign Out'/>
        </Flex>
    )
};

export default Sidebar;