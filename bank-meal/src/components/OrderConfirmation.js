import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OrderConfirmation = ({ onReset }) => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Thank you for your order!</Typography>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        Your meal will be ready shortly.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={onReset}
      >
        Order More Meals
      </Button>
    </Box>
  );
};

export default OrderConfirmation;
