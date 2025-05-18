import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

export default function Scan() {
  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Scan QR Code
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/88/QRCode_wikipedia_en.svg"
          alt="QR Code placeholder"
          style={{ width: 200, height: 200, marginBottom: 16 }}
        />
        <Typography>
          Use your camera to scan a QR code for fast payments or requests.
        </Typography>
      </Paper>
      <Button variant="contained" color="primary">
        Open Camera (Mock)
      </Button>
    </Box>
  );
}
