import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import FormModal from '../forms/FormModal';
import SearchModal from '../forms/SearchModal';

interface NProps {
  color: string;
}
const NavIcons = ({ color }: NProps): JSX.Element => {
  const theme = useTheme();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const openFormModal = () => setOpenForm(true);
  const closeFormModal = () => setOpenForm(false);
  const openSearchModal = () => setOpenSearch(true);
  const closeSearchModal = () => setOpenSearch(false);
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="search" onClick={openSearchModal}>
        <SearchOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="account" onClick={openFormModal}>
        <PersonOutlineOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="shopping card">
        <ShoppingCartOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <SearchModal open={openSearch} closeModal={closeSearchModal} />
      <FormModal open={openForm} closeModal={closeFormModal} />
    </Stack>
  );
};

export default NavIcons;
