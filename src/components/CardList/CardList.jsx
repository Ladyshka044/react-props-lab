import React from 'react';
import { Box, Container, } from '@mui/material';
import Card from '../Card/Card';

function Main({ items }) {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3, 
        justifyContent: 'center' 
      }}>
        {items.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            image={item.image} 
          />
        ))}
      </Box>
    </Container>
  );
}

export default Main;