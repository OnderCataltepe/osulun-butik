import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import sulunImg from '../../assets/sulunImg.png';
import { navData } from '../../navigateData';
interface ActiveType {
  isActive: boolean;
}

const LargeToolbar = (): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  const listItemStyle: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    px: 1.5,
    py: 0,
    fontSize: 14,
    '& a:focus': {
      outline: 'none'
    },
    '&:hover a': {
      color: `${theme.palette.common.orange} !important`
    }
  };

  const handleClick =
    (index: number) =>
    (event: React.MouseEvent<HTMLElement>): void => {
      event.currentTarget.focus();
      setAnchorEl(event.currentTarget);
      setCurrentIndex(index);
    };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const activeNavLink: React.CSSProperties = {
    color: theme.palette.common.orange,
    textDecoration: 'none',
    textAlign: 'center',
    borderColor: 'red'
  };
  const nonActiveNavLink: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none',
    textAlign: 'center',
    borderColor: 'blue'
  };

  const navLinkStyle = ({ isActive }: ActiveType) => (isActive ? activeNavLink : nonActiveNavLink);

  return (
    <>
      <Toolbar
        sx={{
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between'
        }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}>
          <img src={sulunImg} alt="logo" width="35px" height="auto" />
          <p
            style={{
              fontSize: '25px',
              paddingLeft: '5px',
              color: 'white',
              fontFamily: 'initial',
              userSelect: 'none'
            }}>
            SÜLÜN BUTİK
          </p>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}>
          <Box sx={listItemStyle}>
            <NavLink to="/" style={navLinkStyle}>
              ANASAYFA
            </NavLink>
          </Box>
          {navData.map((item, index) => {
            const idNum = index + 1;
            return item.expand ? (
              <Box
                sx={listItemStyle}
                key={index}
                aria-owns={anchorEl ? `menu-${idNum}` : undefined}>
                <NavLink
                  onMouseOver={handleClick(idNum)}
                  onMouseLeave={handleClose}
                  to={`kategori/${item.path}/${item.subTitles[0].path}`}
                  style={navLinkStyle}>
                  {item.title}
                  <Menu
                    id={`menu-${idNum}`}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && currentIndex === idNum}
                    onClose={handleClose}
                    sx={{ pointerEvents: 'none' }}
                    PaperProps={{
                      sx: {
                        pointerEvents: 'auto',
                        py: 1.9,
                        boxShadow: 'none',
                        backgroundColor: 'transparent'
                      }
                    }}>
                    {item.subTitles.map((subItem, index) => {
                      if (index === 0) return null;
                      return (
                        <MenuItem
                          sx={{
                            py: 0,
                            display: 'flex',
                            backgroundColor: 'inset',
                            flexDirection: 'column',
                            background: 'rgba(0, 0, 0, 0.75)',
                            boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(3px)',
                            '&:hover a': {
                              color: theme.palette.common.orange
                            },
                            '& a': {
                              fontSize: '14px',
                              color: 'white',
                              textDecoration: 'none'
                            }
                          }}
                          key={index}
                          selected={false}
                          onClick={handleClose}
                          disableGutters>
                          <NavLink to={`kategori/${item.path}/${subItem.path}`}>
                            <Box
                              sx={{
                                '&:hover': {
                                  '&>img': {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 8s'
                                  }
                                },
                                overflow: 'hidden',
                                py: 1,
                                px: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: '10px',
                                my: 1,
                                '&>img': {
                                  height: '50px',
                                  width: '100px',
                                  marginBottom: '2px'
                                }
                              }}>
                              <img src={subItem.img} alt="image" />
                              {subItem.title}
                            </Box>
                          </NavLink>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </NavLink>
              </Box>
            ) : (
              <Box sx={listItemStyle} key={index}>
                <NavLink
                  to={`kategori/${item.path}/${item.subTitles[0].path}`}
                  style={navLinkStyle}>
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
