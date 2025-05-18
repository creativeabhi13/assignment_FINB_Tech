import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';

const accounts = [
  { id: 1, name: 'Checking Account', balance: '$4,500', avatar: 'https://img.icons8.com/color/48/000000/bank-building.png' },
  { id: 2, name: 'Savings Account', balance: '$12,300', avatar: 'https://img.icons8.com/color/48/000000/savings-account.png' },
  { id: 3, name: 'Investment Account', balance: '$18,750', avatar: 'https://img.icons8.com/color/48/000000/stock-investment.png' },
];

export default function Accounts() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Accounts
      </Typography>
      <Grid container spacing={3}>
        {accounts.map((acc) => (
          <Grid item xs={12} sm={6} md={4} key={acc.id}>
            <Card elevation={3}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={acc.avatar} variant="rounded" sx={{ width: 56, height: 56, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{acc.name}</Typography>
                  <Typography color="text.secondary">Balance: {acc.balance}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
