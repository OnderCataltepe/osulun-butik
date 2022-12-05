/* eslint-disable react/prop-types */

import { Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

import { NavLink } from 'react-router-dom';
import type { NavType } from '../types/types';

interface ActiveType {
  isActive: boolean;
}

interface MProps {
  products: NavType;
}
const MultiWrapper = ({ products }: MProps): JSX.Element => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));

  const activeNavLink: React.CSSProperties = {
    color: 'black',
    textDecoration: 'underline',
    textAlign: 'center'
  };
  const nonActiveNavLink: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none',
    textAlign: 'center'
  };

  const navLinkStyle = ({ isActive }: ActiveType) => (isActive ? activeNavLink : nonActiveNavLink);

  return (
    <Grid container sx={{ pb: 2 }} spacing={0}>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderLeft: 0,
          borderTop: 0,
          borderBottom: isMobil ? 1 : 0,
          borderRight: isMobil ? 0 : 1,
          borderColor: theme.palette.common.gray2,
          p: 3,
          '& >ul': {
            listStyle: 'none'
          },
          '& >ul> li': {
            mx: 1.5,
            my: 0.5
          },
          '& >ul> li:first-of-type': {
            mx: 0
          }
        }}>
        <ul>
          {products.subTitles.map((subItem) => (
            <li key={subItem.path}>
              <NavLink to={subItem.path} style={navLinkStyle}>
                {subItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Grid>

      <Grid item xs={12} md={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default MultiWrapper;
