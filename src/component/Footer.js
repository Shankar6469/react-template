import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Translate } from '@mui/icons-material';
const Footer = () => {
  return (
    <Box  sx={{bgcolor:"#1A1A19",color:"white",p:3,textAlign:'center'}}>
      <Box sx={{my:"3","& svg":{
        fontSize:"25px",
        cursor:"pointer",
        mr:2
      },
      "& svg:hover":{
        color:"goldenrod",
        transform:'translateX(5px)',
        transition:'all 400ms',
      }}}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
      </Box>
      <Typography  variant='h5'  sx={{"@media (min-width:600px)":{
         fontSize:"1rem"
      }}}>
        All rights reserved &copy; Company Name
      </Typography>
    </Box>
  )
}

export default Footer
