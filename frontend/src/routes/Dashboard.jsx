import React from 'react';
import { Grid, Box } from '@mui/material';
import Layout from '../components/Layout';
import Header from '../components/Header';
import OverviewCards from '../components/OverviewCards';
import IncomeExpenseChart from '../components/IncomeExpenseChart';
import CategoryPieChart from '../components/CatgoryPieChart';
import TransactionsTable from '../components/TransactionsTable';
import Notifications from '../components/Notifications';
import BudgetAssistant from '../components/BudgetAssistant';

export default function Dashboard() {
  return (
  
      <Box sx={{ width: '100%' }}>
        <Header name="Sophia" goalPercent={56} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OverviewCards />
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <IncomeExpenseChart />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <CategoryPieChart />
          </Grid>

          <Grid item xs={12} md={7} lg={8}>
            <TransactionsTable />
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Notifications />
            <Box sx={{ mt: 3 }}>
              <BudgetAssistant />
            </Box>
          </Grid>
        </Grid>
      </Box>
 
  );
}
