import React from 'react';
import { 
    UnorderedList, 
    ListItem,
    Box } from '@chakra-ui/layout';

const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

export default function ToDoList() {
    return (
        <Box d="flex" mt='10px' justifyContent='center'>
            <UnorderedList>
                {tasks.map((element, index) => {
                    return <ListItem key={index}> {element} </ListItem>
                })}
            </UnorderedList>
        </Box>
    )
}
