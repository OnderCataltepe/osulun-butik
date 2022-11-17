import React, { useState } from 'react';
import { navPages } from './constants';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import logo from '../../assets/sülünButikLogo.jpg';

interface ActiveType {
  isActive: boolean;
}

const LargeToolbar = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const listItemStyle: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    px: 2,
    py: 0,
    fontSize: '18px',
    color: 'black',
    '&:hover': {
      color: '#5b310c'
    }
  };

  const handleClick =
    (index: number) =>
    (event: React.MouseEvent<HTMLElement>): void => {
      console.log("initial active element: ", document.activeElement) // HOVER DURUMUNDA KONSOLDAN AKTİF OLAN ELEMANIN NE OLDUĞUNA BAKABİLİRSİN, BU SORUN OLUYOR. REACT-ROUTER GITHUB ISSUELARINDA DA BAHSEDİLMİŞ => https://github.com/remix-run/react-router/issues/5210
      event.currentTarget.focus()
      setAnchorEl(event.currentTarget);
      setCurrentIndex(index);
        console.log("final active element: ", document.activeElement)
    };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const activeNavLink: React.CSSProperties = {
    color: theme.palette.common.brown1,
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
    <>
      <Box>
        <img src={logo} alt="logo" width="400" height="auto" />
      </Box>
      <Toolbar sx={{ alignItems: 'center', width: '800px', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly'
          }}>
          {navPages.map((item, index) => {
            const idNum = index + 1;
            return item.expand ? (
              <Box
                sx={listItemStyle}
                key={index}
                aria-owns={anchorEl ? `menu-${idNum}` : undefined}>
                <NavLink
                  onMouseOver={handleClick(idNum)}
                  onMouseLeave={handleClose}
                  to={item.path}
                  style={navLinkStyle}>
                  {item.title}
                  <Menu
                    id={`menu-${idNum}`}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && currentIndex === idNum}
                    onClose={handleClose}
                    MenuListProps={{
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }
                    }}
                    PaperProps={{
                      sx: {
                        pointerEvents: 'auto',
                        width: '100%',
                        py: 2,
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                      }
                    }}>
                    {' '}
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                      }}>
                      <MenuItem
                        sx={{ py: 0 }}
                        selected={false}
                        onClick={handleClose}
                        disableGutters>
                        {item.subTitles.map((subItem, index) => {
                          return (
                            <Box sx={listItemStyle} key={index}>
                              <NavLink to={subItem.path} style={navLinkStyle}>
                                <Box
                                  sx={{
                                    '&:hover': {
                                      boxShadow: '0 0 6px 2px #b7b7b7',
                                      '&>img': {
                                        transform: 'scale(1.2)',
                                        transition: 'transform 10s'
                                      }
                                    },
                                    overflow: 'hidden',
                                    height: '100px',
                                    width: '200px',
                                    borderRadius: '10px',
                                    my: 1
                                  }}>
                                  <img
                                    src={subItem.img}
                                    alt="image"
                                    style={{
                                      height: '100px',
                                      width: '200px'
                                    }}
                                  />
                                </Box>
                                {subItem.title}
                              </NavLink>
                            </Box>
                          );
                        })}
                      </MenuItem>
                    </Box>
                  </Menu>
                </NavLink>
              </Box>
            ) : (
              <Box sx={listItemStyle} key={index}>
                <NavLink to={item.path} style={navLinkStyle}>
                  {item.title}
                </NavLink>
              </Box>
            );
          })}
        </Box>
      </Toolbar>
    </>
  );
};
export default LargeToolbar;
