import * as React from 'react';
import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import me from './ME.jpg'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [heart,setHeart] = useState(false)
  const [share,setShare] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar src={me} aria-label="raul"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Raul Santos"
        subheader="November 05, 1998"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">Programming Languages Skill</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{setHeart(!heart)}}>
          <FavoriteIcon sx={{color:heart===false?'inherit':'red'}} />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>{setShare(!share)}}>
          <ShareIcon sx={{color:share===false?'inherit':'green'}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About Me</Typography>
          <Typography paragraph>Hello, I am a software developer excited to create innovative and efficient solutions. I have a solid background in various programming languages and technologies and talents in front-end and back-end development. I am comfortable taking on new challenges and learning new technologies.</Typography>
          <Typography paragraph>I am always eager to learn and grow as a software developer. When I'm not in front of a computer, I have a deep sense of joy and connection with the water, so I like to do water sports such as swimming and cliff jumping in the water, and my hobbies are playing football or getting out in nature for some challenging hiking or others outdoor exercise.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export const About = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <RecipeReviewCard></RecipeReviewCard>
    </Box>
  )
}
