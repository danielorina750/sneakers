import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#00bcd4' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Bank Meal Ordering System
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
