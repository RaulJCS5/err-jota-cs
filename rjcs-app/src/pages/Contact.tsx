import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h4'>Contact</Typography>
      <a href="mailto:rauljosesantos@hotmail.com" target="blank" rel="noopener"><SocialIcon network='email'></SocialIcon></a>
      <SocialIcon url='https://www.linkedin.com/in/rauljosecsantos/'></SocialIcon>
      <SocialIcon url='https://twitter.com/rauljosesan'></SocialIcon>
      <SocialIcon url='https://www.instagram.com/rauljcsantos'></SocialIcon>
      <SocialIcon url='https://www.facebook.com/raul.jose.35/'></SocialIcon>
      <SocialIcon url='https://soundcloud.com/user-692546360'></SocialIcon> 
      <SocialIcon url='https://github.com/RaulJCS5'></SocialIcon>
      <SocialIcon url='https://discordapp.com/users/368011779760193537'></SocialIcon>
      <SocialIcon url='https://rauljcs5.github.io/' network='sharethis'></SocialIcon>
    </Box>
  )
}
