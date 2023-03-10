import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export const Contact = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h4'>Contact</Typography>
      <Typography variant='h6'>Email: <a href="mailto:rauljosesantos@hotmail.com" target="blank" rel="noopener">rauljosesantos@hotmail.com</a></Typography>
      <Typography variant='h6'>LinkedIn: <a href="https://www.linkedin.com/in/rauljosecsantos/" target="blank" rel="noopener">linkedin.com/in/rauljosecsantos/</a></Typography>
      <Typography variant='h6'>GitHub: <a href="https://github.com/RaulJCS5" target="blank" rel="noopener">github.com/RaulJCS5</a></Typography>
      <Typography variant='h6'>Website: <a href="https://rauljcs5.github.io/" target="blank" rel="noopener">rauljcs5.github.io/</a></Typography>
    </Box>
  )
}
