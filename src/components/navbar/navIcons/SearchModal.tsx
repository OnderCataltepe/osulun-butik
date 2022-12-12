// MUI
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Types
import { SxProps } from '@mui/material/styles';

interface FProps {
  color: string;
}
const SearchModal = ({ color }: FProps): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const openSearchModal = (): void => setOpenSearch(true);
  const closeSearchModal = (): void => setOpenSearch(false);
  const style: SxProps = {
    position: 'absolute',
    width: '100%',
    bgcolor: 'transparent',
    boxShadow: 24,
    mt: 2,
    display: 'flex',
    justifyContent: 'center'
  };

  const searchHandle = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      closeSearchModal();
    } else {
      closeSearchModal();
    }
  };
  return (
    <>
      {' '}
      <IconButton aria-label="search" onClick={openSearchModal}>
        <SearchOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSearch}
        onClose={closeSearchModal}>
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
                placeholder="Ürün ismi yazın..."
                value={searchTerm}
                inputProps={{ 'aria-label': 'search input' }}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    searchHandle();
                    e.preventDefault();
                  }
                }}
              />
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: theme.palette.common.gray2 }}
              />
              <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={searchHandle}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </>
      </Modal>
    </>
  );
};

export default SearchModal;
