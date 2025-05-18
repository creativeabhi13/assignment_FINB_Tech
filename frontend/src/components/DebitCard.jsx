import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  Button
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChipIcon from '@mui/icons-material/Memory';
import ContactlessIcon from '@mui/icons-material/Wifi';

export default function DebitCardPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Your Debit Card
      </Typography>

      <Card
        sx={{
          maxWidth: 400,
          background: 'linear-gradient(135deg, #4A00E0, #8E2DE2)',
          color: '#fff',
          borderRadius: 3,
          position: 'relative',
          p: 3,
          boxShadow: 6,
        }}
      >
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle2">FINB BANK</Typography>
            <ContactlessIcon />
          </Grid>

          <Box mt={4} mb={2}>
            <Typography variant="h6" fontFamily="monospace">
              **** **** **** 1234
            </Typography>
          </Box>

          <Grid container justifyContent="space-between">
            <Box>
              <Typography variant="caption">CARD HOLDER</Typography>
              <Typography variant="body2">Abhishek Kumar</Typography>
            </Box>
            <Box>
              <Typography variant="caption">VALID THRU</Typography>
              <Typography variant="body2">12/27</Typography>
            </Box>
          </Grid>

          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
            <ChipIcon fontSize="large" />
            <CreditCardIcon fontSize="large" />
          </Box>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Card Controls
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="error">
              Freeze Card
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" color="primary">
              Replace Card
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" color="secondary">
              Change PIN
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined">
              Set Spending Limit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
