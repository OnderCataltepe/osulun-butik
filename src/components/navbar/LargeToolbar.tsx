import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/sülünButikLogo.jpg';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { navPages } from './constants';

interface ActiveType {
  isActive: boolean;
}
interface NavStyleTypes {
  [props: string]: string | number;
}

interface StyleType {
  [props: string]: string | number | NavStyleTypes;
}

const LargeToolbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const listItemStyle: StyleType = {
    display: 'flex',
    justifyContent: 'center',
    px: 2,
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      color: '#5b310c'
    }
  };

  const handleClick = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setCurrentIndex(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const activeNavLink: NavStyleTypes = {
    color: theme.palette.common.brown1,
    textDecoration: 'underline',
    textAlign: 'center'
  };
  const nonActiveNavLink: NavStyleTypes = {
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
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          <Box sx={listItemStyle} key={111}>
            <NavLink to="/home" style={navLinkStyle}>
              Anasayfa
            </NavLink>
          </Box>
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
                      onMouseLeave: handleClose,
                      sx: {
                        pointerEvents: 'auto',
                        width: '100%',
                        maxWidth: '100%',
                        pt: 2,
                        mx: 2,
                        boxShadow: 'none'
                      }
                    }}>
                    <MenuItem selected={false} onClick={handleClose} disableGutters>
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
                                  mb: 1
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
