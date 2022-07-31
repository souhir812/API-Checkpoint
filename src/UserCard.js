import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard({ user }) {
  return (
    <Card sx={{ height:'600px' , width:'300px' }}>
      
       <CardMedia
        component="img"
        height="250px"
        width='50px'
        image="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
        alt="img-profil"
      /> 
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
        { user.name }
        </Typography>
         <Typography variant="body1" color="text.secondary">
          {user.username}<br/>
          {user.email}<br/>
          {user.address.street}<br/>
          {user.address.suite}<br/>
          {user.address.city}<br/>
          {user.phone}<br/>
          {user.website}
        </Typography> 
      </CardContent>
      <CardActions style={{ display :'flex', justifyContent:'center'}}>
        <Button size="x-large">Share</Button>
        <Button size="x-large">Learn More</Button>
      </CardActions>
    </Card>
  );
}
