import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip
} from '@mui/material';

const initialBoosts = [
  {
    id: 1,
    title: '5% Cashback on Groceries',
    description: 'Get 5% cashback on all grocery purchases till end of this month.',
    expiry: '2025-05-31',
    claimed: false,
  },
  {
    id: 2,
    title: 'Double Rewards Points',
    description: 'Earn double reward points on dining and travel expenses.',
    expiry: '2025-06-15',
    claimed: false,
  },
  {
    id: 3,
    title: 'Zero Fee for International Transactions',
    description: 'No fees on international transactions for your debit card.',
    expiry: '2025-07-01',
    claimed: false,
  },
];

function isExpired(expiryDate) {
  return new Date(expiryDate) < new Date();
}

export default function Boosts() {
  const [boosts, setBoosts] = useState(initialBoosts);

  const handleClaim = (id) => {
    setBoosts((prev) =>
      prev.map((boost) =>
        boost.id === id ? { ...boost, claimed: true } : boost
      )
    );
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Boosts & Offers
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Activate boosts to get special benefits and rewards on your spending.
      </Typography>

      <Grid container spacing={3}>
        {boosts.map((boost) => {
          const expired = isExpired(boost.expiry);
          return (
            <Grid key={boost.id} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {boost.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {boost.description}
                  </Typography>
                  <Chip
                    label={`Expires: ${new Date(boost.expiry).toLocaleDateString()}`}
                    color={expired ? 'error' : 'primary'}
                    size="small"
                  />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={expired || boost.claimed}
                    onClick={() => handleClaim(boost.id)}
                    fullWidth
                  >
                    {boost.claimed ? 'Claimed' : 'Claim'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
