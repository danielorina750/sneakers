import React, { useState } from 'react';
import { Grid, Button, Card, CardContent, Typography, Box, TextField } from '@mui/material';

// Meals data (with lunch fixed as a single meal)
const meals = [
  { id: 1, name: 'Pancakes', type: 'Breakfast', price: 500 },
  { id: 2, name: 'Omelette', type: 'Breakfast', price: 600 },
  { id: 3, name: 'Daily Special', type: 'Lunch', price: 700 }, // Fixed lunch option
];

const MealMenu = () => {
  const [selectedMeals, setSelectedMeals] = useState([]);  // Cart
  const [mealType, setMealType] = useState('Breakfast');
  const [orderDetails, setOrderDetails] = useState(null);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [floor, setFloor] = useState('');
  const [seatLocation, setSeatLocation] = useState('');

  // Handle meal selection (for breakfast)
  const handleMealSelect = (meal) => {
    setSelectedMeals([...selectedMeals, meal]);
  };

  // Handle lunch order directly (no selection)
  const handleLunchOrder = () => {
    const lunchMeal = meals.find((meal) => meal.type === 'Lunch');
    setSelectedMeals([lunchMeal]); // Directly order the "Daily Special" for lunch
    setMealType('Lunch');
  };

  // Handle form submission for lunch details
  const handleOrderDetailsSubmit = () => {
    if (!name || !department || !floor || !seatLocation) {
      // If any field is empty, show an alert
      alert('Please fill in all the fields before placing the order.');
    } else if (selectedMeals.length === 0) {
      // If no meal is selected, show an alert
      alert('Please add a meal to your cart before placing the order.');
    } else {
      // All fields are filled, submit the order
      setOrderDetails({ name, department, floor, seatLocation });
    }
  };

  // Handle removing items from the cart
  const handleRemoveFromCart = (mealToRemove) => {
    const updatedCart = selectedMeals.filter((meal) => meal.id !== mealToRemove.id);
    setSelectedMeals(updatedCart);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return selectedMeals.reduce((total, meal) => total + meal.price, 0);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* If order details are submitted, show confirmation */}
      {orderDetails ? (
        <Box>
          <Typography variant="h6">Order Confirmation</Typography>
          <Typography>Name: {orderDetails.name}</Typography>
          <Typography>Department: {orderDetails.department}</Typography>
          <Typography>Floor: {orderDetails.floor}</Typography>
          <Typography>Seat Location: {orderDetails.seatLocation}</Typography>
          <Typography>Meals Ordered:</Typography>
          {selectedMeals.map((meal) => (
            <Typography key={meal.id}>{meal.name} - Ksh {meal.price}</Typography>
          ))}
          <Typography variant="h6">
            Total: Ksh {getTotalPrice()}
          </Typography>
        </Box>
      ) : (
        <>
          {/* Display meal options (Breakfast or Lunch) */}
          <Grid container spacing={2}>
            {meals
              .filter((meal) => meal.type.toLowerCase() === mealType.toLowerCase())
              .map((meal) => (
                <Grid item xs={12} sm={6} md={3} key={meal.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{meal.name}</Typography>
                      <Typography variant="body1">{meal.type}</Typography>
                      <Typography variant="body2">{`Ksh ${meal.price}`}</Typography>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          if (meal.type === 'Lunch') {
                            handleLunchOrder(); // Directly order lunch
                          } else {
                            handleMealSelect(meal); // Add breakfast to cart
                          }
                        }}
                      >
                        {meal.type === 'Lunch' ? 'Order Now' : 'Add to Cart'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          {/* If it's breakfast, show the cart */}
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6">Your Cart</Typography>
            {selectedMeals.length > 0 ? (
              <Grid container spacing={2}>
                {selectedMeals.map((meal) => (
                  <Grid item xs={12} sm={6} md={3} key={meal.id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">{meal.name}</Typography>
                        <Typography variant="body2">Ksh {meal.price}</Typography>
                        <Button
                          variant="outlined"
                          color="error"
                          fullWidth
                          onClick={() => handleRemoveFromCart(meal)}
                        >
                          Remove
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>No meals added to the cart.</Typography>
            )}
          </Box>

          {/* If it's lunch, show the order form */}
          {mealType === 'Lunch' && (
            <Box sx={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
              <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                Enter your details to order lunch
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                fullWidth
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                label="Floor"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                fullWidth
                sx={{ marginBottom: '20px' }}
                select
                SelectProps={{ native: true }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </TextField>
              <TextField
                label="Seat Location"
                value={seatLocation}
                onChange={(e) => setSeatLocation(e.target.value)}
                fullWidth
                sx={{ marginBottom: '20px' }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleOrderDetailsSubmit}
              >
                Place Lunch Order
              </Button>
            </Box>
          )}

          {/* Submit Button */}
          {mealType === 'Breakfast' && selectedMeals.length > 0 && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleOrderDetailsSubmit}
              sx={{ marginTop: '20px' }}
            >
              Place Breakfast Order
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default MealMenu;
