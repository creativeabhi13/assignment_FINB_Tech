import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { pieData } from '../data/mockData';
import { Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff8042',
  '#00C49F', '#FFBB28', '#0088FE', '#FF8042',
  '#a29bfe', '#fd79a8', '#e17055', '#55efc4'
];

const RADIAN = Math.PI / 180;

// Optional: Custom label rendering
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return percent > 0.03 ? ( // show label if > 3%
    <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central" fontSize={12}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

const CategoryPieChart = () => {
  const [active, setActive] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  const onPieEnter = (_, index) => setActive(index);

  return (
    <Paper sx={{ p: { xs: 2, sm: 3 }, mt: 2, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Spending by Category
      </Typography>

      <ResponsiveContainer width="100%" height={isXs ? 320 : isSm ? 380 : 420}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={isXs ? 80 : isSm ? 100 : 120}
            onMouseEnter={onPieEnter}
            labelLine={false}
            label={renderCustomizedLabel}
            paddingAngle={3}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout={isXs ? 'horizontal' : 'vertical'}
            verticalAlign={isXs ? 'bottom' : 'middle'}
            align={isXs ? 'center' : 'right'}
            wrapperStyle={{
              maxHeight: 200,
              overflowY: 'auto',
              fontSize: isXs ? 11 : 13,
              marginLeft: isXs ? 0 : 10,
              padding: 4
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default CategoryPieChart;
