import React from 'react';
import { Grid, Avatar } from '@mui/material';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';

const Authentication = () => {
  return (
    <Grid item xs={8}>
      This is authentication page.
      <CommonButton variant="default">Go to docs</CommonButton>
      <NotificationBell iconColor="primary" badgeContent={2} />
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </Grid>
  );
};

export default Authentication;
