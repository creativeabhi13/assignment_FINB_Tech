import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './routes/Dashboard';

const App = () => (
  <Box sx={{ display:'flex' }}>
    {/* <Sidebar /> */}
    <Box component="main" sx={{ flexGrow:1, p:3 }}>
      {/* <Toolbar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Box>
  </Box>
);
export default App;
