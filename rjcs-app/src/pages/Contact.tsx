import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, IconButton } from '@mui/material';
import { handleClick } from './DrawerAppBar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, borderRadius: 5 }}>
      <CardContent>
        <Typography sx={{ marginBottom: 5 }} variant='h4'>Find Me On</Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={1}>
          <Grid item>
            <IconButton onClick={() => handleClick('https://www.linkedin.com/in/rauljosecsantos/')}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick('https://github.com/RaulJCS5')}>
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick('https://twitter.com/rauljosesan')}>
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick('https://www.facebook.com/raul.jose.35/')}>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick('https://www.instagram.com/rauljcsantos')}>
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick('mailto:rauljosesantos@hotmail.com')}>
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export const Contact = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
    }}>
      <ActionAreaCard></ActionAreaCard>
    </Box>
  )
}
