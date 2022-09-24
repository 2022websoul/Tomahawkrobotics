import  React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import './Gridcard.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  padding:'10px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gridcard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} id='card1' >
     
      
        <Grid item  xs={12} sm={6} md={6} >
          <Item >

<CardMedia
       
        component="img" id='grid1'
        image="https://f.hubspotusercontent10.net/hubfs/5289815/Website%204.0/Icons%20and%20Tiles/user-centric2.png" 
        alt="zenbook" 
      />
 <p className='card1text'>Intuitive to train, use, and upgrade – designed with the input of 100's of users to address their unmet needs</p>
</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          
          
          <CardMedia
       
        component="img"
        image="https://f.hubspotusercontent10.net/hubfs/5289815/Website%204.0/Icons%20and%20Tiles/multi-domain2.png"
        alt="zenbook" 
      />
           <p className='card1text'>Collaborative control of air and ground systems – unified common operating picture across TAK/ATAK </p>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
         
          <CardMedia
       
        component="img"
        image="https://f.hubspotusercontent10.net/hubfs/5289815/Website%204.0/Icons%20and%20Tiles/cross-architecture2.png"
        alt="zenbook" 
      />
 <p className='card1text' id="full">Fully supports ROS, RAS-G IOP, MAVLink, and STANAG-4586 – unlocking true interoperability</p>
 

          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
          
          <CardMedia
       
        component="img"
        image="https://f.hubspotusercontent10.net/hubfs/5289815/Website%204.0/Icons%20and%20Tiles/ai-enhanced2.png"
        alt="zenbook" 
      />

<p className='card1text'>Robots networked as a single entity – democratizing AI capabilities across your unmanned systems fleet</p>


          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
