import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './const/navbarItems';
import { navbarStyles } from './const/styles';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const drawerWidth = 220;
  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          // <Link to={`/${item.route}/`}>
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
            <ListItemButton>
              <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.text} primary={item.label} />
            </ListItemButton>
          </ListItem>
          // </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;
