import React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';
import './navbar.css'; // Import your custom CSS file if needed

const App = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF'}}>
        <Toolbar variant="dense" sx={{ minHeight: '70px' }}>
          <div className='logo'>
            E-kumpas
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <h1>HELLO</h1>
    </>
  );
}

export default App;
