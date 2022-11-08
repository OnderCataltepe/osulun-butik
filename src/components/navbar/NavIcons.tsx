import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const NavIcons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="search">
        <SearchOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="account">
        <PersonOutlineOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="shopping card">
        <ShoppingCartOutlinedIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default NavIcons;
