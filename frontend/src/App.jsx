import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './routes/Dashboard';
import Accounts from './components/Accoutns';
import BudgetAssistant from './components/BudgetAssistant';
import Send from './components/Send';
import Request from './components/Request';
import Scan from './components/Scan';
import Split from './components/Split';
import Rewards from './components/Rewards';






const Cashflow = () => <h2>Cashflow Page</h2>;
const Reports = () => <h2>Reports Page</h2>;

const SpendyDashboard = () => <h2>Spendy Dashboard</h2>;
const SpendyTransactions = () => <h2>Spendy Transactions</h2>;
const SpendyReports = () => <h2>Spendy Reports</h2>;
const SpendyBudget = () => <h2>Spendy Budget</h2>;

const FinwiseOverview = () => <h2>Finwise Overview</h2>;
const FinwiseTransactions = () => <h2>Finwise Transactions</h2>;
const FinwiseInvoices = () => <h2>Finwise Invoices</h2>;
const FinwiseReports = () => <h2>Finwise Reports</h2>;

const Cards = () => <h2>Debit Card Page</h2>;
const Invite = () => <h2>Invite Friends Page</h2>;
const Boosts = () => <h2>Boosts Page</h2>;
const Activity = () => <h2>Activity Page</h2>;
const Cash = () => <h2>Cash Page</h2>;
const Help = () => <h2>Help Page</h2>;

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Default nav */}
        <Route path="/" element={<Dashboard/>} />
        <Route path="/send" element={<Send />} />
        <Route path="/request" element={<Request />} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/split" element={<Split />} />
        <Route path="/rewards" element={<Rewards />} />

        {/* Dashboard nav */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/budgets" element={<BudgetAssistant />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/reports" element={<Reports />} />

        {/* Spendy nav */}
        <Route path="/spendy/dashboard" element={<SpendyDashboard />} />
        <Route path="/spendy/transactions" element={<SpendyTransactions />} />
        <Route path="/spendy/reports" element={<SpendyReports />} />
        <Route path="/spendy/budget" element={<SpendyBudget />} />

        {/* Finwise nav */}
        <Route path="/finwise/overview" element={<FinwiseOverview />} />
        <Route path="/finwise/transactions" element={<FinwiseTransactions />} />
        <Route path="/finwise/invoices" element={<FinwiseInvoices />} />
        <Route path="/finwise/reports" element={<FinwiseReports />} />

        {/* Quick Actions */}
        <Route path="/cards" element={<Cards />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/boosts" element={<Boosts />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/help" element={<Help />} />

        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Layout>
  );
}
