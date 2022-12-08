import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { auth, signOut } from '../../firebase/config';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import FormModal from '../forms/FormModal';
import SearchModal from '../forms/SearchModal';
import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
interface NProps {
  color: string;
}
const NavIcons = ({ color }: NProps): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openFormModal = () => setOpenForm(true);
  const closeFormModal = () => setOpenForm(false);
  const openSearchModal = () => setOpenSearch(true);
  const closeSearchModal = () => setOpenSearch(false);
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="search" onClick={openSearchModal}>
        <SearchOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="account"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={isAuth ? handleClick : openFormModal}>
        <PersonOutlineOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>
      <IconButton aria-label="shopping card">
        <ShoppingCartOutlinedIcon sx={{ color: color }} fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={() => navigate('/settings')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => signOut(auth)}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <SearchModal open={openSearch} closeModal={closeSearchModal} />
      <FormModal open={openForm} closeModal={closeFormModal} />
    </Stack>
  );
};

export default NavIcons;
