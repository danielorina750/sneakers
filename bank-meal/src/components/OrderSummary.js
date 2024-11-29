import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const OrderSummary = ({ selectedMeals, onConfirmOrder }) => {
  const total = selectedMeals.reduce((sum, meal) => sum + meal.price, 0);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>Order Summary</Typography>
      {selectedMeals.length === 0 ? (
        <Typography variant="body1">No meals added to the cart.</Typography>
      ) : (
        <Box>
          {selectedMeals.map((meal, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              <Typography variant="body1">{meal.name}</Typography>
              {/* Display the price with Ksh */}
              <Typography variant="body1">{`Ksh ${meal.price}`}</Typography>
            </Box>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">{`Ksh ${total}`}</Typography>
          </Box>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '20px' }}
        onClick={onConfirmOrder}
      >
        Confirm Order
      </Button>
    </Box>
  );
};

export default OrderSummary;
