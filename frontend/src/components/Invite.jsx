import React from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Card,
  CardContent,
  Tooltip,
  Snackbar
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';

export default function InviteFriends() {
  const referralLink = 'https://finb.tech/referral/creativeabhi13';
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Invite Your Friends
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Share your referral link and earn rewards when your friends sign up and start using the platform.
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1" mb={1}>
            Your Referral Link
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              value={referralLink}
              fullWidth
              size="small"
              InputProps={{ readOnly: true }}
            />
            <Tooltip title="Copy link">
              <IconButton onClick={handleCopy}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant="outlined" startIcon={<EmailIcon />}>
          Invite via Email
        </Button>
        <Button variant="contained" startIcon={<ShareIcon />}>
          Share
        </Button>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        message="Referral link copied!"
      />
    </Box>
  );
}
