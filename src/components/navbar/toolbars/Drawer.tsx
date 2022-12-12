// Hooks and router
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components, data and images
import NavIcons from '../navIcons/NavIcons';
import sulunImg from '../../../assets/sulunImg.png';
import { navData } from '../../../navigateData';
// MUI
import { useTheme } from '@mui/material/styles';
// MUI COMPONENTS
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
// MUI ICONS
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const DrawerComp = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleClose = (): void => {
    setOpenDrawer(false);
  };
  return (
    <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }} disableGutters>
      <Drawer
        anchor="left"
        variant="persistent"
        PaperProps={{
          sx: { width: '100%', height: '100vh' }
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: '100%', pt: 6 }}>
          <Divider sx={{ mt: 1 }} />
          <ListItem sx={{ p: 0 }}>
            <Accordion sx={{ width: '100%' }} elevation={0} disableGutters>
              <AccordionSummary>
                <Link
                  style={{ color: 'black', textDecoration: 'none' }}
                  to="/"
                  onClick={handleClose}>
                  ANASAYFA
                </Link>
              </AccordionSummary>
            </Accordion>
          </ListItem>
          <Divider />
          {navData.map((item, index) => {
            const idNumber = index + 1;
            return (
              <div key={item.path}>
                <ListItem sx={{ p: 0 }}>
                  {item.expand ? (
                    <Accordion
                      sx={{ width: '100%' }}
                      expanded={expanded === `panel${idNumber}`}
                      onChange={handleChange(`panel${idNumber}`)}
                      elevation={0}
                      disableGutters>
                      <AccordionSummary
                        expandIcon={expanded === `panel${idNumber}` ? <RemoveIcon /> : <AddIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${idNumber}-header`}>
                        <Link
                          style={{ color: 'black', textDecoration: 'none' }}
                          to={`kategori/${item.path}/${item.subTitles[0].path}`}
                          onClick={handleClose}>
                          {item.title}
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List sx={{ display: 'flex', flexDirection: 'column', pl: 4, py: 0 }}>
                          {item.subTitles.map((subItem, index) => {
                            if (index === 0) return null;
                            return (
                              <ListItem key={subItem.path} sx={{ pb: 1 }} disablePadding>
                                <Link
                                  style={{ color: 'black', textDecoration: 'none' }}
                                  to={`kategori/${item.path}/${subItem.path}`}
                                  onClick={handleClose}>
                                  {subItem.title}
                                </Link>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Accordion sx={{ width: '100%' }} elevation={0} disableGutters>
                      <AccordionSummary>
                        <Link
                          style={{ color: 'black', textDecoration: 'none' }}
                          to={`kategori/${item.path}/${item.subTitles[0].path}`}
                          onClick={handleClose}>
                          {item.title}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  )}
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          px: 2,
          zIndex: 1400
        }}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          {openDrawer ? (
            <CloseIcon sx={{ color: openDrawer ? theme.palette.common.gray2 : 'white' }} />
          ) : (
            <MenuIcon sx={{ color: openDrawer ? theme.palette.common.gray2 : 'white' }} />
          )}
        </IconButton>

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => {
            navigate('/');
            handleClose();
          }}>
          <img src={sulunImg} alt="logo" width="35px" height="auto" />
          <p
            style={{
              fontSize: '25px',
              paddingLeft: '3px',
              color: openDrawer ? theme.palette.common.gray2 : 'white',
              fontFamily: 'initial'
            }}>
            SÜLÜN BUTİK
          </p>
        </Box>

        <NavIcons color={openDrawer ? theme.palette.common.gray2 : 'white'} />
      </Box>
    </Toolbar>
  );
};

export default DrawerComp;
