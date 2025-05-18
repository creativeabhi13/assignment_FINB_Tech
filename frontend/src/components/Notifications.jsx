import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';

const messages = [
  { text: 'Overspending on Food', type: 'alert' },
  { text: 'Salary not received yet', type: 'warning' }
];
const Notifications = () => (
  <Paper sx={{ p:2, mt:2 }}>
    <Typography variant="h6">Notifications & Tips</Typography>
    <Box sx={{ mt:1, display:'flex', gap:1 }}>
      {messages.map((m,i)=><Chip key={i} label={m.text} color={m.type==='alert'?'error':'warning'} />)}
    </Box>
  </Paper>
);
export default Notifications;