import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';

const budgets = [
  { category: 'Food', used: 300, limit: 500 },
  { category: 'Transport', used: 150, limit: 200 }
];
const BudgetAssistant = () => (
  <Paper sx={{ p:2, mt:2 }}>
    <Typography variant="h6">Budget Assistant</Typography>
    {budgets.map((b,i)=>(<Box key={i} sx={{ mt:1 }}>
      <Typography>{b.category}: ₹ {b.used} /₹ {b.limit}</Typography>
      <LinearProgress variant="determinate" value={b.used/b.limit*100} />
    </Box>))}
  </Paper>
);
export default BudgetAssistant;