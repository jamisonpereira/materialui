import React from 'react';
import { Badge, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicMenu from '../BasicMenu/BasicMenu';
import { useState } from 'react';

const notifications = [
  {
    id: 0,
    label: 'First notification',
  },
  {
    id: 1,
    label: 'Second notification',
  },
];

const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotifications = `You have ${badgeContent} new notifications.`;
  const noNotifications = `No new notifications.`;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationBell;
