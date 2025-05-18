import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { timeSeries } from '../data/mockData';
import { Paper, Typography } from '@mui/material';

const IncomeExpenseChart = () => (
  <Paper sx={{ p: 2, mt: 2 }}>
    <Typography variant="h6">Net Worth Over Time</Typography>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={timeSeries}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#1976d2" fillOpacity={0.2} fill="#1976d2" />
      </AreaChart>
    </ResponsiveContainer>
  </Paper>
);
export default IncomeExpenseChart;