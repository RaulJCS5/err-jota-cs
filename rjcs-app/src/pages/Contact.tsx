import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { changeBG, changeFG } from './DrawerAppBar';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600, borderRadius: 5 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ marginBottom: 5 }} variant='h4'>Also you can find me on</Typography>
          <Grid container spacing={1}>
            <Grid item>
              <a href="mailto:rauljosesantos@hotmail.com" target="blank" rel="noopener"><SocialIcon bgColor={changeBG()} fgColor={changeFG()} network='email'></SocialIcon></a>
            </Grid>
            <Grid item>
              <SocialIcon bgColor={changeBG()} fgColor={changeFG()} url='https://soundcloud.com/user-692546360'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon fgColor='white' url='https://discordapp.com/users/368011779760193537'></SocialIcon>
            </Grid>
            <Grid item>
              <SocialIcon bgColor={changeBG()} fgColor={changeFG()} url='https://rauljcs5.github.io/' network='sharethis'></SocialIcon>
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
