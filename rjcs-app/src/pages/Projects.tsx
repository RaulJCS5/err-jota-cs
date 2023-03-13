import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import battleship from './330px-Battleship_game_board.svg.png'

const titleBTWeb = "Battleship Web"
const descriptBTWeb = "This system consists of a backend service and frontend applications that run on users' devices, providing a game interface. The backend service manages all game-related data, enforces game rules, and stores game states. Frontend applications communicate with the backend service via an HTTP API, providing a user-friendly interface for interacting with the game."

const titleBTAndroid = "Battleship Android"
const descriptBTAndroid = "The project developed is a Battleship game for Android using Kotlin and Jetpack Compose, with communication through an HTTP API made using Spring Kotlin. The game logic implemented in the backend service manages all game-related, while the Android app provides a user-friendly interface for interacting with the game."

export function ActionAreaCard({ title, description, imageCard, color, link }: { title: string, description: string, imageCard: string, color?: string, link: string }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => { window.location.href = link }}>
        <Box sx={{ borderRadius: 1, backgroundColor: color }}>
          <CardMedia
            component="img"
            image={imageCard}
            alt={title.toLowerCase()}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <ActionAreaCard color='white' title={titleBTWeb} description={descriptBTWeb} imageCard={battleship} link='https://github.com/RaulJCS5/Battleship-web'></ActionAreaCard>
      </Grid>
      <Grid item xs={4}>
        <ActionAreaCard color='white' title={titleBTAndroid} description={descriptBTAndroid} imageCard={battleship} link='https://github.com/RaulJCS5/Battleship-android'></ActionAreaCard>
      </Grid>
      <Grid item xs={4}>
        {/*<Item>Item</Item>*/}
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 3, marginRight: 3, }}>
      <Typography variant='h5' sx={{ marginBottom: 2 }}>Open Source Projects</Typography>
      <Typography color='text.secondary' sx={{ display: 'flex', justifyContent: 'center' }}>College Projects</Typography>
      <Box
        borderBottom={2}
        borderRadius={1}
        color='text.secondary'
        sx={{ marginBottom: 2 }}
      />
      <Box>
        <Grid container spacing={3}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
      <Typography color='text.secondary' sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>Personal Projects</Typography>
      <Box
        borderBottom={2}
        borderRadius={1}
        color='text.secondary'
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom:50 }}>
        <Typography variant='body2' color='text.secondary'>New Projects Coming Soon</Typography>
      </Box>
    </Box>
  );
}

export const Projects = () => {
  return (
    <NestedGrid></NestedGrid>
  )
}
