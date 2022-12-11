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
import { useState } from 'react';
// Types
import { SxProps } from '@mui/material/styles';

interface FProps {
  color: string;
}
const SearchModal = ({ color }: FProps) => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const openSearchModal = () => setOpenSearch(true);
  const closeSearchModal = () => setOpenSearch(false);
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
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search input' }}
              />
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: theme.palette.common.gray2 }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
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
