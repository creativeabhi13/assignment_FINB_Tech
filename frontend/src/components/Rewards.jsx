import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const rewards = [
  { id: 1, title: '5% Cashback', description: 'Get 5% cashback on grocery shopping.', points: 500 },
  { id: 2, title: 'Free Movie Ticket', description: 'Redeem 1000 points for a free movie ticket.', points: 1000 },
  { id: 3, title: 'Travel Voucher', description: 'Redeem 2000 points for travel discounts.', points: 2000 },
];

export default function Rewards() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Your Rewards
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Collect points and redeem exciting offers and discounts.
      </Typography>
      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{reward.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {reward.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Points required: {reward.points}
                </Typography>
                <Button variant="outlined" color="primary" fullWidth>
                  Redeem
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
