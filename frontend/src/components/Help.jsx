import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer:
      'Go to the profile settings and click on "Reset Password". Follow the instructions to set a new password.',
  },
  {
    question: 'How do I link my bank account?',
    answer:
      'Navigate to the Accounts page and click "Add Bank Account". Enter your bank details and verify.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can fill the contact form below or email us at support@finb.tech.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we use industry-standard encryption to protect your data.',
  },
];

export default function Help() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Here you can add actual submission logic (API call)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Help & Support
      </Typography>

      <Typography variant="h6" mb={2}>
        Frequently Asked Questions
      </Typography>
      {faqs.map(({ question, answer }, idx) => (
        <Accordion key={idx} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
        <Typography variant="h6" mb={2}>
          Contact Support
        </Typography>

        {submitted && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
