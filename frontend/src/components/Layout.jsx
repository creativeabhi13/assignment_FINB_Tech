import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PeopleIcon from '@mui/icons-material/People';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HistoryIcon from '@mui/icons-material/History';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportIcon from '@mui/icons-material/Support';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsightsIcon from '@mui/icons-material/Insights';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useLocation } from 'react-router-dom';
import theme from '../theme';

// Topbar nav items
const navItems = {
  default: ['Home', 'Send', 'Request', 'Scan', 'Split', 'Rewards'],
  dashboard: ['Home', 'Accounts', 'Budgets', 'Cashflow', 'Reports'],
  spendy: ['Dashboard', 'Transactions', 'Reports', 'Budget'],
  finwise: ['Overview', 'Transactions', 'Invoices', 'Reports']
};

// Routes for topbar nav items
const navRoutes = {
  default: {
    Home: '/',
    Send: '/send',
    Request: '/request',
    Scan: '/scan',
    Split: '/split',
    Rewards: '/rewards',
  },
  dashboard: {
    Home: '/dashboard',
    Accounts: '/accounts',
    Budgets: '/budgets',
    Cashflow: '/cashflow',
    Reports: '/reports',
  },
  spendy: {
    Dashboard: '/spendy/dashboard',
    Transactions: '/spendy/transactions',
    Reports: '/spendy/reports',
    Budget: '/spendy/budget',
  },
  finwise: {
    Overview: '/finwise/overview',
    Transactions: '/finwise/transactions',
    Invoices: '/finwise/invoices',
    Reports: '/finwise/reports',
  }
};

// Sidebar actions based on group
const getQuickActions = (navGroup) => {
  switch (navGroup) {
    case 'dashboard':
      return [
        { text: 'Accounts', icon: <AccountBalanceIcon />, to: '/accounts' },
        { text: 'Cashflow', icon: <AttachMoneyIcon />, to: '/cashflow' },
        { text: 'Budgets', icon: <PieChartIcon />, to: '/budgets' },
        { text: 'Reports', icon: <InsightsIcon />, to: '/reports' },
      ];
    case 'spendy':
      return [
        { text: 'Transactions', icon: <HistoryIcon />, to: '/spendy/transactions' },
        { text: 'Budgeting', icon: <PieChartIcon />, to: '/spendy/budget' },
        { text: 'Reports', icon: <InsightsIcon />, to: '/spendy/reports' },
      ];
    case 'finwise':
      return [
        { text: 'Overview', icon: <DashboardIcon />, to: '/finwise/overview' },
        { text: 'Invoices', icon: <AccountTreeIcon />, to: '/finwise/invoices' },
        { text: 'Transactions', icon: <HistoryIcon />, to: '/finwise/transactions' },
        { text: 'Reports', icon: <InsightsIcon />, to: '/finwise/reports' },
      ];
    default:
      return [
        { text: 'Accounts', icon: <AccountBalanceIcon />, to: '/accounts' },
        { text: 'Debit card', icon: <CreditCardIcon />, to: '/cards' },
        { text: 'Invite friends', icon: <PeopleIcon />, to: '/invite' },
        { text: 'Boosts', icon: <FlashOnIcon />, to: '/boosts' },
        { text: 'Activity', icon: <HistoryIcon />, to: '/activity' },
        { text: 'Cash', icon: <AttachMoneyIcon />, to: '/cash' },
        { text: 'Help', icon: <SupportIcon />, to: '/help' },
      ];
  }
};

export default function Layout({ children }) {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  // Determine which nav group to use based on current URL path
  const getNavGroup = () => {
    if (location.pathname.startsWith('/dashboard')) return 'dashboard';
    if (location.pathname.startsWith('/spendy')) return 'spendy';
    if (location.pathname.startsWith('/finwise')) return 'finwise';
    return 'default';
  };

  const navGroup = getNavGroup();
  const topbarItems = navItems[navGroup];
  const quickActions = getQuickActions(navGroup);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed" color="inherit" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isMdUp && (
              <IconButton edge="start" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img src="https://finb.tech/_next/static/media/FINB_TEXT_LOGO.4055e333.svg" alt="FINB Logo" style={{ width: 30, marginRight: 8 }} />
              <Typography variant="h6">FINB</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            {topbarItems.map((item, idx) => (
              <Typography
                key={idx}
                variant="body1"
                component={Link}
                to={navRoutes[navGroup][item]}
                sx={{
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: location.pathname === navRoutes[navGroup][item] ? 'primary.main' : 'inherit',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  cursor: 'pointer',
                }}
              >
                {item}
              </Typography>
            ))}
            <IconButton><HelpOutlineIcon /></IconButton>
            <IconButton><NotificationsIcon /></IconButton>
            <Avatar src="https://i.pravatar.cc/40" />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMdUp ? 'permanent' : 'temporary'}
        open={isMdUp || open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            mt: isMdUp ? '64px' : 0
          }
        }}
      >
        <Toolbar />
        <List>
          {quickActions.map(action => (
            <ListItemButton key={action.text} component={Link} to={action.to} sx={{ my: 0.5 }}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText primary={action.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3 },
          pt: '96px',
          pb: 3,
          ml: isMdUp ? '240px' : 0,
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
