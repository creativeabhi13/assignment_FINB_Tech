export const overviewData = {
  Monthly: {
    balance: 320000,
    income: 450000,
    expenses: 130000,
  },
  Quarterly: {
    balance: 960000,    // 320000 × 3
    income: 1350000,     // 450000 × 3
    expenses: 390000,    // 130000 × 3
  },
  'Year-to-date': {
    balance: 3840000,    // 320000 × 12
    income: 5400000,     // 450000 × 12
    expenses: 1560000,   // 130000 × 12
  },
};

export const timeSeries = [
  { month: 'Jan', value: 10000 },
  { month: 'Feb', value: 12000 },
  { month: 'Mar', value: 9000 },
  { month: 'Apr', value: 11000 },
  { month: 'May', value: 7000 },
  { month: 'Jun', value: 15000 },
  { month: 'Jul', value: 13000 },
  { month: 'Aug', value: 14000 },
  { month: 'Sep', value: 12500 },
  { month: 'Oct', value: 13500 },
  { month: 'Nov', value: 14500 },
  { month: 'Dec', value: 16000 },
];


export const pieData = [
  { category: 'Food', value: 400 },
  { category: 'Transport', value: 300 },
  { category: 'Shopping', value: 600 },
  { category: 'Entertainment', value: 200 },
  { category: 'Utilities', value: 350 },
  { category: 'Health', value: 250 },
  { category: 'Travel', value: 500 },
  { category: 'Education', value: 450 },
  { category: 'Insurance', value: 320 },
  { category: 'Others', value: 150 },
];


export const transactions = [
  { date: '2025-07-01', desc: 'Salary', type: 'credit', category: 'Income', amount: 5000 },
  { date: '2025-07-02', desc: 'Groceries', type: 'debit', category: 'Food', amount: 150 },
  { date: '2025-07-03', desc: 'Movie Night', type: 'debit', category: 'Entertainment', amount: 50 },
  { date: '2025-07-04', desc: 'Uber Ride', type: 'debit', category: 'Transport', amount: 80 },
  { date: '2025-07-05', desc: 'Online Shopping', type: 'debit', category: 'Shopping', amount: 220 },
  { date: '2025-07-06', desc: 'Freelance Payment', type: 'credit', category: 'Income', amount: 1000 },
  { date: '2025-07-07', desc: 'Electricity Bill', type: 'debit', category: 'Utilities', amount: 120 },
  { date: '2025-07-08', desc: 'Gym Membership', type: 'debit', category: 'Health', amount: 60 },
  { date: '2025-07-09', desc: 'Coffee', type: 'debit', category: 'Food', amount: 15 },
  { date: '2025-07-10', desc: 'Cashback', type: 'credit', category: 'Rewards', amount: 30 },
  { date: '2025-07-11', desc: 'Flight Ticket', type: 'debit', category: 'Travel', amount: 650 },
  { date: '2025-07-12', desc: 'Book Purchase', type: 'debit', category: 'Education', amount: 75 },
  { date: '2025-07-13', desc: 'Doctor Visit', type: 'debit', category: 'Health', amount: 100 },
  { date: '2025-07-14', desc: 'Insurance Premium', type: 'debit', category: 'Insurance', amount: 200 },
  { date: '2025-07-15', desc: 'Freelance Bonus', type: 'credit', category: 'Income', amount: 400 },
];

