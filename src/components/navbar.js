import React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';
import './navbar.css'; // Import your custom CSS file if needed
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF'}}>
          <Toolbar variant="dense" sx={{ minHeight: '70px' }}>
            <div className='logo'>
              <Link to ="/">E-kumpas</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default App;
