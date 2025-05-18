import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, Avatar } from '@mui/material';
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
import { Link } from 'react-router-dom';
import theme from '../theme';

const navItems = ['Home','Accounts','Budgets','Cashflow','Reports'];
const quickActions = [
  { text: 'Accounts', icon: <AccountBalanceIcon />, to: '/accounts' },
  { text: 'Debit card', icon: <CreditCardIcon />, to: '/cards' },
  { text: 'Invite friends', icon: <PeopleIcon />, to: '/invite' },
  { text: 'Boosts', icon: <FlashOnIcon />, to: '/boosts' },
  { text: 'Activity', icon: <HistoryIcon />, to: '/activity' },
  { text: 'Cash', icon: <AttachMoneyIcon />, to: '/cash' },
  { text: 'Help', icon: <SupportIcon />, to: '/help' },
];

export default function Layout({ children }) {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar>
          {!isMdUp && (
            <IconButton edge="start" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow:1 }}>
            <img src="/logo192.png" alt="FINB Logo" style={{ width: 30, marginRight: 8 }} />
            <Typography variant="h6">FINB</Typography>
          </Box>
          {isMdUp && navItems.map(item => (
            <Typography key={item} component={Link} to={`/${item.toLowerCase()}`} sx={{ mx: 1, textDecoration: 'none', color: 'inherit' }}>
              {item}
            </Typography>
          ))}
          <IconButton><HelpOutlineIcon /></IconButton>
          <IconButton><NotificationsIcon /></IconButton>
          <Avatar src="https://i.pravatar.cc/40" sx={{ ml: 2 }} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMdUp ? 'permanent' : 'temporary'}
        open={isMdUp || open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', mt: '64px' }
        }}
      >
        <List>
          {quickActions.map(action => (
            <ListItemButton key={action.text} component={Link} to={action.to} sx={{ my: 0.5 }}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText primary={action.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}