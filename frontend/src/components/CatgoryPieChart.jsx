import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { pieData } from '../data/mockData';
import { Paper, Typography } from '@mui/material';

const COLORS = ['#8884d8','#82ca9d','#ffc658','#ff8042'];

const CategoryPieChart = () => {
  const [active, setActive] = useState(null);
  const onPieEnter = (_, index) => setActive(index);
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Spending by Category</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="category"
            outerRadius={80} onMouseEnter={onPieEnter}>
            {pieData.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};
export default CategoryPieChart;