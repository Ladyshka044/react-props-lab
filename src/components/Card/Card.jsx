import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

function Card({ title, description, image }) {
  return (
    <MuiCard sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button 
          variant="contained" 
          size="small" 
          onClick={() => alert(title)}
          sx={{ borderRadius: 2 }}
        >
          Дізнатися більше
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;