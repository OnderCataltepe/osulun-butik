// Components

// MUI
import IconButton from '@mui/material/IconButton';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import { useState } from 'react';
interface FProps {
  open: boolean;
  closeModal: () => void;
}
const SearchModal = ({ open, closeModal }: FProps) => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  const style: SxProps = {
    position: 'absolute',
    width: '100%',
    bgcolor: 'transparent',
    boxShadow: 24,
    mt: 2,
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={closeModal}>
      <>
        <Box sx={style}>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              backgroundColor: 'white',
              border: '1px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: isMobil ? '80%' : '500px',
              maxWidth: '500px'
            }}>
            <InputBase
              sx={{ flex: 1, px: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search input' }}
            />
            <Divider orientation="vertical" sx={{ backgroundColor: theme.palette.common.gray2 }} />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </>
    </Modal>
  );
};

export default SearchModal;
