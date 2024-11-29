import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import ConfirmationPage from './pages/ConfirmationPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

// Define the light blue theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Light Blue color
    },
    secondary: {
      main: '#ffffff', // White color for secondary components
    },
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // default to home page
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [floor, setFloor] = useState('');
  const [seatLocation, setSeatLocation] = useState('');
  const [mealType, setMealType] = useState(''); // breakfast or lunch
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleMealSelect = (meal) => {
    if (mealType === 'lunch') {
      // Direct order for lunch
      alert(`${meal.name} has been ordered for you.`);
    } else {
      // Add to cart for breakfast
      setSelectedMeals([...selectedMeals, meal]);
    }
  };

  const handleConfirmOrder = () => {
    setCurrentPage('confirmation');
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        {/* Conditional Rendering based on currentPage */}
        {currentPage === 'home' && <Home onStartOrder={() => handleNavigation('order')} />}
        {currentPage === 'order' && (
          <OrderPage
            onConfirmOrder={handleConfirmOrder}
            onMealSelect={handleMealSelect}
            selectedMeals={selectedMeals}
            setFloor={setFloor}
            setSeatLocation={setSeatLocation}
            mealType={mealType}
            setMealType={setMealType}
            setName={setName}
            setDepartment={setDepartment}
          />
        )}
        {currentPage === 'confirmation' && (
          <ConfirmationPage
            selectedMeals={selectedMeals}
            floor={floor}
            seatLocation={seatLocation}
            name={name}
            department={department}
            onReset={() => handleNavigation('home')}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
