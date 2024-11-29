import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OrderConfirmation = ({ selectedMeals, floor, seatLocation, name, department, onReset }) => {
  const total = selectedMeals.reduce((sum, meal) => sum + meal.price, 0);

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Thank you for your order!</Typography>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        Your meal will be ready shortly.
      </Typography>
      <Typography variant="body1">Name: {name}</Typography>
      <Typography variant="body1">Department: {department}</Typography>
      <Typography variant="body1">Floor: {floor}</Typography>
      <Typography variant="body1">Seat Location: {seatLocation}</Typography>
      <Typography variant="body1">
        Total: Ksh {total}
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
