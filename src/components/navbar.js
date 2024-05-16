import React from 'react'


import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


function Home() {
  return (
    <>
    <Layout/>
   
   
    <br/>
    <Card sx={{ width: '88vw',minHeight:'400px' ,mx:'auto' , marginY:'10px'}}>
      <CardCover >
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZWQlo8v2szeR55CNOTMHZHTirPtsHEU2Qg&usqp=CAU"
           loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          Sandeep Madhavrao Patil
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
        Hyderabad , Telangana , India .
        </Typography>

      </CardContent>
    </Card>
    <Foot/>
    </>
  );
}



export default Home
