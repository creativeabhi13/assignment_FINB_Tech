import React, { useState } from 'react';
import { overviewData } from '../data/mockData';
import { Box, ButtonGroup, Button, Grid, Paper, Typography } from '@mui/material';

const OverviewCards = () => {
  const periods = ['Monthly', 'Quarterly', 'Year-to-date'];
  const [period, setPeriod] = useState('Monthly');
  const data = overviewData[period];
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Overview</Typography>
        <ButtonGroup variant="outlined">
          {periods.map(p => <Button key={p} onClick={() => setPeriod(p)}>{p}</Button>)}
        </ButtonGroup>
      </Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {['balance', 'income', 'expenses'].map(key => (
          <Grid item xs={12} sm={4} key={key}>
            <Paper sx={{ p: 2 }}>
              <Typography color="textSecondary">{key.charAt(0).toUpperCase()+key.slice(1)}</Typography>
              <Typography variant="h5">₹ {data[key].toLocaleString()}</Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography color="textSecondary">Savings Ratio</Typography>
            <Typography variant="h5">
              {Math.round((data.income - data.expenses)/data.income * 100)}%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default OverviewCards;