// MUI
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import BasketCard from '../../cards/BasketCard';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
// Hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
// Types
interface BagPTypes {
  color: string;
}

const Bag = ({ color }: BagPTypes): JSX.Element => {
  const navigate = useNavigate();
  const basketValues = useAppSelector((state) => state.user.values.basket);
  const [anchorBasketEl, setAnchorBasketEl] = useState<null | HTMLElement>(null);
  const openBasket = Boolean(anchorBasketEl);

  const basketClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorBasketEl(event.currentTarget);
  };

  const basketClose = (): void => {
    setAnchorBasketEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="basket-menu"
        aria-controls={openBasket ? 'basket-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openBasket ? 'true' : undefined}
        onClick={basketClick}>
        <Badge
          color="warning"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          badgeContent={basketValues.length}>
          <ShoppingCartOutlinedIcon sx={{ color: color }} fontSize="small" />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorBasketEl}
        id="basket-menu"
        open={openBasket}
        onClose={basketClose}
        onClick={basketClose}
        MenuListProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 2
          }
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'
          }
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
        {basketValues.map((product) => (
          <MenuItem key={product.id}>
            <BasketCard {...product} />
          </MenuItem>
        ))}

        <Button
          color="warning"
          variant="outlined"
          size="small"
          onClick={() => navigate('/user/sepetim')}>
          Sepete Git
        </Button>
      </Menu>
    </>
  );
};

export default Bag;
