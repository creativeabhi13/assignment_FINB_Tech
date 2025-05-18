import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

export default function Request() {
  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Request Money
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography sx={{ mb: 2 }}>
          Enter details below to request money from your contacts.
        </Typography>
        <TextField fullWidth label="Request From (Email or Phone)" margin="normal" />
        <TextField fullWidth label="Amount" type="number" margin="normal" />
        <TextField
          fullWidth
          label="Reason (Optional)"
          multiline
          rows={3}
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Request
        </Button>
      </Paper>
    </Box>
  );
}
