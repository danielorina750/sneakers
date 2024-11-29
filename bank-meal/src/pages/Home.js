import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = ({ onStartOrder }) => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Bank's Meal Ordering System!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onStartOrder}
      >
        Start Ordering
      </Button>
    </Box>
  );
};

export default Home;
