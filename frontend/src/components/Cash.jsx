import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';

const initialTransactions = [
  { id: 1, description: 'Cash withdrawal', amount: -500, date: '2025-05-15' },
  { id: 2, description: 'Cash received from friend', amount: 1000, date: '2025-05-14' },
  { id: 3, description: 'Coffee shop', amount: -50, date: '2025-05-13' },
];

export default function Cash() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const calculateBalance = () => {
    return transactions.reduce((acc, tx) => acc + tx.amount, 0);
  };

  const handleAddTransaction = () => {
    if (!description || !amount) return;

    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return;

    const newTx = {
      id: transactions.length + 1,
      description,
      amount: type === 'income' ? amt : -amt,
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([newTx, ...transactions]);
    setDescription('');
    setAmount('');
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Cash Overview
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" color={calculateBalance() >= 0 ? 'success.main' : 'error.main'}>
          Current Balance: ₹{calculateBalance()}
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTransaction();
        }}
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          sx={{ flexGrow: 1, minWidth: 180 }}
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          sx={{ width: 120 }}
          inputProps={{ min: 0 }}
        />
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          SelectProps={{ native: true }}
          sx={{ width: 140 }}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </TextField>
        <Button variant="contained" type="submit" sx={{ height: 40 }}>
          Add
        </Button>
      </Box>

      <Typography variant="h6" mb={2}>
        Recent Cash Transactions
      </Typography>

      <List sx={{ bgcolor: 'background.paper', maxHeight: 400, overflow: 'auto' }}>
        {transactions.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" p={3}>
            No transactions found.
          </Typography>
        ) : (
          transactions.map(({ id, description, amount, date }) => (
            <ListItem key={id} divider>
              <ListItemText primary={description} secondary={new Date(date).toLocaleDateString()} />
              <ListItemSecondaryAction>
                <Typography color={amount >= 0 ? 'success.main' : 'error.main'} fontWeight={600}>
                  {amount >= 0 ? `+₹${amount}` : `-₹${Math.abs(amount)}`}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
}
