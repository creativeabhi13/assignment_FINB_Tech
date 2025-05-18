import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export default function Split() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Alice', amount: 20 },
    { id: 2, name: 'Bob', amount: 15 },
    { id: 3, name: 'Charlie', amount: 25 },
  ]);
  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const addContact = () => {
    if (newName && newAmount) {
      setContacts([...contacts, { id: Date.now(), name: newName, amount: Number(newAmount) }]);
      setNewName('');
      setNewAmount('');
    }
  };

  const total = contacts.reduce((sum, c) => sum + c.amount, 0);

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Split a Bill
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography sx={{ mb: 2 }}>
          Add contacts and their share to split the bill evenly.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Contact Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Amount"
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            sx={{ width: 120 }}
          />
          <Button variant="contained" onClick={addContact}>
            Add
          </Button>
        </Box>

        <List>
          {contacts.map(({ id, name, amount }) => (
            <div key={id}>
              <ListItem>
                <ListItemText primary={name} secondary={`Amount: $${amount}`} />
              </ListItem>
              <Divider />
            </div>
          ))}
          <ListItem>
            <ListItemText
              primary="Total"
              secondary={`$${total}`}
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Confirm Split
        </Button>
      </Paper>
    </Box>
  );
}
