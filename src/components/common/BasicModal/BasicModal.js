import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommonButton from '../CommonButton/CommonButton';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';

import React from 'react';

const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <CommonButton variant="contained" onClick={onSubmit}>
            Submit
          </CommonButton>
          <CommonButton onClick={onClose}>Cancel</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
