import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

export default function Send() {
  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Send Money
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography sx={{ mb: 2 }}>
          Use the form below to send money to your contacts quickly.
        </Typography>
        <TextField fullWidth label="Recipient Email" margin="normal" />
        <TextField fullWidth label="Amount" type="number" margin="normal" />
        <TextField
          fullWidth
          label="Message (Optional)"
          multiline
          rows={3}
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Paper>
    </Box>
  );
}
