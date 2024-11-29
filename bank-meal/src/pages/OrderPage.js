import React, { useState } from 'react';
import MealMenu from '../components/MealMenu';
import OrderSummary from '../components/OrderSummary';
import { Box, TextField, RadioGroup, FormControlLabel, Radio, FormControl, Typography, MenuItem, Select, InputLabel, FormControl as MuiFormControl } from '@mui/material';

const OrderPage = ({
  onConfirmOrder,
  onMealSelect,
  selectedMeals,
  setFloor,
  setSeatLocation,
  mealType,
  setMealType,
  setName,
  setDepartment
}) => {
  const [floorInput, setFloorInput] = useState('');
  const [seatInput, setSeatInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [departmentInput, setDepartmentInput] = useState('');

  const handleFloorChange = (event) => setFloorInput(event.target.value);
  const handleSeatLocationChange = (event) => setSeatInput(event.target.value);
  const handleMealTypeChange = (event) => setMealType(event.target.value);
  const handleNameChange = (event) => setNameInput(event.target.value);
  const handleDepartmentChange = (event) => setDepartmentInput(event.target.value);

  const handleSubmitOrder = () => {
    setName(nameInput);
    setDepartment(departmentInput);
    setFloor(floorInput);
    setSeatLocation(seatInput);
    onConfirmOrder();
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6">Please Select Your Meal Type</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={mealType}
          onChange={handleMealTypeChange}
        >
          <FormControlLabel value="breakfast" control={<Radio />} label="Breakfast" />
          <FormControlLabel value="lunch" control={<Radio />} label="Lunch" />
        </RadioGroup>
      </FormControl>

      <TextField
        label="Name"
        fullWidth
        value={nameInput}
        onChange={handleNameChange}
        sx={{ marginBottom: '10px' }}
      />

      <TextField
        label="Department"
        fullWidth
        value={departmentInput}
        onChange={handleDepartmentChange}
        sx={{ marginBottom: '10px' }}
      />

      <MuiFormControl fullWidth sx={{ marginBottom: '10px' }}>
        <InputLabel>Floor</InputLabel>
        <Select
          value={floorInput}
          onChange={handleFloorChange}
          label="Floor"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </MuiFormControl>

      <TextField
        label="Seat Location"
        fullWidth
        value={seatInput}
        onChange={handleSeatLocationChange}
        sx={{ marginBottom: '20px' }}
      />

      <MealMenu onMealSelect={onMealSelect} mealType={mealType} />
      <OrderSummary selectedMeals={selectedMeals} onConfirmOrder={handleSubmitOrder} />
    </Box>
  );
};

export default OrderPage;
