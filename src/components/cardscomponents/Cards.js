import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MediaCard( {nombres, descripcion} ) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        src='http://images7.memedroid.com/images/UPLOADED356/615ffc2ea2583.jpeg'
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {nombres}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
