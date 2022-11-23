import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

import FormModal from '../forms/FormModal';

interface NProps {
  color: string;
}
const NavIcons = ({ color }: NProps): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="search">
        <SearchOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="account" onClick={openModal}>
        <PersonOutlineOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="shopping card">
        <ShoppingCartOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>

      <FormModal open={open} closeModal={closeModal} />
    </Stack>
  );
};

export default NavIcons;
