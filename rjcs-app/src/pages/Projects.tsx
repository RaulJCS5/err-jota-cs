import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 3, marginRight: 3, }}>
      <Typography variant='h5' sx={{marginBottom:2}}>Open Source Projects</Typography>
      <Typography color='text.secondary' sx={{ display: 'flex', justifyContent: 'center' }}>College Projects</Typography>
      <Box
        borderBottom={2}
        borderRadius={1}
        color='text.secondary'
        sx={{marginBottom:2}}
      />
      <Box>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export const Projects = () => {
  return (
    <NestedGrid></NestedGrid>
  )
}
