import React from 'react';
import { 
    Flex, 
    Box,
    Image,
    Text
} from "@chakra-ui/react"
import puppyImg from '../assets/images/puppy.jpg'

export default function Profile() {
    return (
        <Flex color="white" flexDirection='column' border='1px' borderColor='black' p='10px'>
            <Box w='100%'>
                <Image src={puppyImg}/>
            </Box>
            <Text color='black' mt='10px'> 
                Dolore consequat occaecat consectetur nulla aliquip proident aliquip ut ad veniam. 
                Aliqua minim commodo qui fugiat nulla id aliquip sint deserunt nisi adipisicing. 
                Esse sint laboris amet ex reprehenderit cupidatat ad sint quis tempor reprehenderit sint culpa Lorem. 
                Non eu aliqua anim quis quis enim nulla nostrud. Ex ea et voluptate dolore. 
                Aliqua est anim adipisicing sit excepteur dolore qui nulla qui. Nostrud id eu fugiat tempor qui commodo.
                Cupidatat ad cupidatat aute duis ullamco officia proident ea ipsum in ex. 
                Nulla ipsum incididunt consectetur dolore sint duis culpa tempor qui exercitation sit. 
                Non commodo qui eiusmod qui magna. Excepteur deserunt sint duis enim qui commodo eu. 
                Velit Lorem ut ea sint veniam pariatur magna.
            </Text>
        </Flex>
    )
}
