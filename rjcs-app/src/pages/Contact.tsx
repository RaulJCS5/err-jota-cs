import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, borderRadius: 5 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ marginBottom: 5 }} variant='h4'>Follow Me On</Typography>
          <Grid container spacing={1}>
            <Grid item>
              <a href="mailto:rauljosesantos@hotmail.com" target="blank" rel="noopener"><SocialIcon network='email'></SocialIcon></a>
            </Grid>
            <Grid item>
              <SocialIcon url='https://www.linkedin.com/in/rauljosecsantos/'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://twitter.com/rauljosesan'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://www.instagram.com/rauljcsantos'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://www.facebook.com/raul.jose.35/'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://soundcloud.com/user-692546360'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://github.com/RaulJCS5'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://discordapp.com/users/368011779760193537'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon url='https://rauljcs5.github.io/' network='sharethis'></SocialIcon>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export const Contact = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <ActionAreaCard></ActionAreaCard>
    </Box>
  )
}
