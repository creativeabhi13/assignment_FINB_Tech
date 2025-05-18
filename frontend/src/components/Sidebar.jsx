import React from 'react';
import { Drawer, List, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const tabs = ['Dashboard', 'Transactions', 'Reports', 'Budgets'];

const Sidebar = () => (
  <Drawer variant="permanent">
    <Toolbar />
    <List>
      {tabs.map(tab => (
        <ListItemButton key={tab} component={Link} to={`/${tab.toLowerCase()}`}>
          <ListItemText primary={tab} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);
export default Sidebar;