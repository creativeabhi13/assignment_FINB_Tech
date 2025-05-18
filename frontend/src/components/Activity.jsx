import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const sampleActivities = [
  { id: 1, description: 'Salary credited', date: '2025-05-15', amount: 5000, type: 'income' },
  { id: 2, description: 'Grocery shopping', date: '2025-05-14', amount: -150, type: 'expense' },
  { id: 3, description: 'Electricity bill', date: '2025-05-13', amount: -100, type: 'expense' },
  { id: 4, description: 'Sold old laptop', date: '2025-05-12', amount: 300, type: 'income' },
  { id: 5, description: 'Movie night', date: '2025-05-10', amount: -40, type: 'expense' },
];

export default function Activity() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const filteredActivities =
    filter === 'all'
      ? sampleActivities
      : sampleActivities.filter((activity) => activity.type === filter);

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Recent Activity
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Track your recent transactions and activities here.
      </Typography>

      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="activity filter"
        sx={{ mb: 3 }}
      >
        <ToggleButton value="all" aria-label="all">
          All
        </ToggleButton>
        <ToggleButton value="income" aria-label="income">
          Income
        </ToggleButton>
        <ToggleButton value="expense" aria-label="expense">
          Expense
        </ToggleButton>
      </ToggleButtonGroup>

      <List sx={{ bgcolor: 'background.paper', maxHeight: 400, overflow: 'auto' }}>
        {filteredActivities.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" p={3}>
            No activities found.
          </Typography>
        ) : (
          filteredActivities.map(({ id, description, date, amount }) => (
            <ListItem key={id} divider>
              <ListItemText
                primary={description}
                secondary={new Date(date).toLocaleDateString()}
              />
              <ListItemSecondaryAction>
                <Typography
                  color={amount >= 0 ? 'success.main' : 'error.main'}
                  fontWeight={600}
                >
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
