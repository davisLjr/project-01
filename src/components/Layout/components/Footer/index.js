import React from 'react'
import { Box, Flex, Stack, Text, Link, Image } from '@chakra-ui/react';
import copy from './icon/copyR.png'
import twitter from './icon/twitter.png'
import facebook from './icon/facebook.png'
import linkedin from './icon/linkedin.png'
import youtube from './icon/youtube.png'
import instagram from './icon/instagram.png'
import snapchat from './icon/snapchat.png'

export const Footer = () => {
  return (
    <>
      <Box 
        bg='backgroundForm' 
        width='100%' 
        p='40px 20px'
        boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'
      > 
        <Flex 
          justifyContent={{ base:'center', lg:'space-between' }} 
          width='100%' 
          maxWidth='1300px' 
          margin='auto'
          borderBottom={{ base:'0px', lg:'1px solid' }} 
          borderColor={{ base:'none', lg:'borders.grayDefault' }}
          pt='20px'
          pb='20px' 
          flexDirection={{ base:'column', lg:'row' }}
        > 
          <Box display='flex' alignItems='flex-end' margin={{ base:'auto', lg:'0' }}
            sx={{
              '.copyright': {
                verticalAlign:'bottom',
                m:'0px 5px 6px 0px'
              }
            }}
          >
            <Image src={ copy } alt="Copyright" width={15} className='copyright' /> 
            <Text color='grayText'>
              2020
            </Text>
          </Box>
          <Stack 
            direction='row' 
            flexWrap='wrap' 
            justifyContent='center' 
            spacing={{ base:'5px', lg:'20px' }} 
            mt='20px' 
            borderTop={{ base:'1px solid', lg:'none' }} 
            pt='20px'
            borderColor='borders.grayDefault'
          >
            <Link sx={styles} mb='10px' href='https://twitter.com/'>
              <Image src={ twitter } alt="twitter red social" />
            </Link>
            <Link sx={styles} href='https://www.facebook.com/'>
              <Image src={ facebook } alt="facebook red social" />
            </Link>
            <Link sx={styles} href='https://www.linkedin.com/'>
              <Image src={ linkedin } alt="linkedin red social" />
            </Link>
            <Link sx={styles} href='https://www.youtube.com/'>
              <Image src={ youtube } alt="youtube red social" />
            </Link>
            <Link sx={styles} href='https://www.instagram.com/'>
              <Image src={ instagram } alt="instagram red social" />
            </Link>
            <Link sx={styles} href='https://www.snapchat.com/'>
              <Image src={ snapchat } alt="snapchat red social" />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

const styles = {
  p:'10px',
  borderRadius:'50%',
  bg:'grayDefault',
  width:'45px',
  height:'45px',
  transition:'0.3s',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  _hover:{
    transform: 'translate(0, -10px)',
    boxShadow:'rgb(50 50 93 / 30%) 0px 18px 35px -10px, rgb(0 0 0 / 40%) 0px 14px 25px -5px',
    transition:'0.3s',
  }
}
