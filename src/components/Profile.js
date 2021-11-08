import React from 'react';
import { 
    Flex, 
    Box,
    Image
} from "@chakra-ui/react"
import puppyImg from '../assets/images/puppy.jpg'

export default function Profile() {
    return (
        <Flex color="white">
            <Box w='100vh'>
                <Image src={puppyImg}/>
            </Box>
        </Flex>
    )
}
