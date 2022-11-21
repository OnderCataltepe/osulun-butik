import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
interface NProps {
  color: string;
}
const NavIcons = ({ color }: NProps): JSX.Element => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="search">
        <SearchOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="account">
        <PersonOutlineOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="shopping card">
        <ShoppingCartOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default NavIcons;
