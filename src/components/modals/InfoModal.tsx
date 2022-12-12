import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface IProps {
  color: string;
  text: string;
  open: boolean;
  closeModal: () => void;
}

const InfoModal = ({ color, text, open, closeModal }: IProps): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          textAlign: 'center',
          bgcolor: 'background.paper',
          border: `2px solid ${color}`,
          boxShadow: 24,
          p: 4
        }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: color }}>
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

export default InfoModal;
