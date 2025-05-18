import React, { useState } from 'react';
import { transactions } from '../data/mockData';
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Box } from '@mui/material';

const TransactionsTable = () => {
  const [filter, setFilter] = useState('');
  const data = transactions.filter(tx => tx.desc.toLowerCase().includes(filter));
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Recent Transactions</Typography>
      <Box sx={{ mt:1, mb:1 }}><TextField label="Search" value={filter} onChange={e=>setFilter(e.target.value)} /></Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell><TableCell>Description</TableCell>
            <TableCell>Type</TableCell><TableCell>Category</TableCell><TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tx,i)=>(
            <TableRow key={i}>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.desc}</TableCell>
              <TableCell sx={{ color: tx.type==='credit'?'green':'red' }}>{tx.type}</TableCell>
              <TableCell>{tx.category}</TableCell>
              <TableCell sx={{ color: tx.type==='credit'?'green':'red' }}>$ {tx.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default TransactionsTable;