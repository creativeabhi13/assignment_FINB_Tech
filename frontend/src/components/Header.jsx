import React from 'react';
import { Box, Typography, Avatar, LinearProgress, useMediaQuery } from '@mui/material';
import theme from '../theme';

export default function Header({ name, goalPercent }) {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={{ display: 'flex', flexDirection: isSmUp ? 'row' : 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: isSmUp ? 0 : 1 }}>
        <Box sx={{ width: isSmUp ? 240 : '100%', mr: 2 }}>
          <Typography variant="subtitle2" gutterBottom>Good Morning, {name}</Typography>
          <LinearProgress variant="determinate" value={goalPercent} />
          <Typography variant="caption">Savings Goal ({goalPercent}%)</Typography>
        </Box>
        <Avatar alt={name} src={`https://i.pravatar.cc/300?u=${name}`} sx={{ width: 48, height: 48 }} />
      </Box>
    </Box>
  );
}
