import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, Grid } from '@mui/material';
import me from './ME.jpg'
import { useNavigate } from 'react-router';

const styleButton = {
  borderRadius: 5,
  border: "2px solid",
  fontWeight: "bold",
  "&:hover": { border: "2px solid", fontWeight: "bold" },
  "&:focus": { border: "2px solid", fontWeight: "bold" }
}

const styleNavigateButtons = {
  border: "2px solid",
  fontWeight: "bold",
  "&:hover": { border: "2px solid", fontWeight: "bold" },
  "&:focus": { border: "2px solid", fontWeight: "bold" }
}

//'secondary' | 'success' | 'error' | 'info' | 'warning'
function FormRow1() {
  return (
    <React.Fragment>
      <Grid item>
        <Button color="secondary" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Research</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="success" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Problem-Solving</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="error" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Technical Skills</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
  return (
    <React.Fragment>
      <Grid item>
        <Button color="info" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Decision-Making</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="warning" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Adaptability</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="secondary" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Active Listening</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  );
}
function FormRow3() {
  return (
    <React.Fragment>
      <Grid item>
        <Button color="success" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Communication</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="error" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Team Work</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="warning" sx={styleButton} disableTouchRipple variant="outlined">
          <Typography fontSize={10} fontWeight="bold" >Object Oriented Programming (OOP)</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default function ActionAreaCard() {
  const navigate = useNavigate()
  return (
    <Card sx={{
      maxWidth: 500,
    }}>
      <CardContent>
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Box>
            <Typography variant="body2" color="text.secondary">Hi, my name is</Typography>
            <Typography gutterBottom variant="h2" component="div">Raul Santos</Typography>
          </Box>
          <Avatar src={me} sx={{ width: 200, height: 200 }}></Avatar>
        </CardContent>
        <Box sx={{ padding: '5px' }}>
          <CardActionArea disableTouchRipple sx={{ borderRadius: '5px', padding: '10px' }}>
            <Typography variant='h6' sx={{ marginBottom: "10px" }} fontWeight="bold">Skill Set</Typography>
            <Grid container spacing={1}>
              <Grid container item spacing={1}>
                <FormRow1 />
              </Grid>
              <Grid container item spacing={1}>
                <FormRow2 />
              </Grid>
              <Grid container item spacing={1}>
                <FormRow3 />
              </Grid>
            </Grid>
          </CardActionArea>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button sx={styleNavigateButtons} color='inherit' onClick={() => { navigate('/about') }} variant="outlined">About Me</Button>
          <Button sx={styleNavigateButtons} color='inherit' onClick={() => { navigate('/contact') }} variant="outlined">Contact</Button>
        </Box>

      </CardContent>
    </Card>
  );
}
export const Home = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // adjust as needed
    }}>
      <ActionAreaCard></ActionAreaCard>
    </Box>
  )
}
