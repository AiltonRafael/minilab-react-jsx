import React from 'react'
import { Box } from '@chakra-ui/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSmile, faFrownOpen} from '@fortawesome/free-solid-svg-icons'

export default function EmotionMeter(){
    let emotion = 'SAD'
    
    return (
        <Box d='flex' justifyContent='center' mt='10px'> 
                {emotion === 'HAPPY' ? <FontAwesomeIcon icon={faSmile} /> : <FontAwesomeIcon icon={faFrownOpen}/>}
        </Box>
    )
}
