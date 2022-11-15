import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/sülünButikLogo.jpg';
import { navPages } from './constants';

import NavIcons from './NavIcons';
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

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }} disableGutters>
      <Drawer
        anchor="left"
        PaperProps={{
          sx: { width: '100%' }
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: '100%', pt: 12 }}>
          {navPages.map((item, index) => {
            const idNumber = index + 1;
            return (
              <>
                <ListItem key={index} sx={{ p: 0 }}>
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
                        <Link style={{ color: 'black', textDecoration: 'none' }} to={item.path}>
                          {item.title}
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List sx={{ display: 'flex', flexDirection: 'column', pl: 4, py: 0 }}>
                          {item.subTitles.map((subItem, index) => {
                            return (
                              <ListItem key={index} sx={{ pb: 1 }} disablePadding>
                                <Link
                                  style={{ color: 'black', textDecoration: 'none' }}
                                  to={subItem.path}>
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
                        <Link style={{ color: 'black', textDecoration: 'none' }} to={item.path}>
                          {item.title}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  )}
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        {openDrawer ? (
          <CloseIcon sx={{ color: theme.palette.common.gray2, zIndex: 9999 }} />
        ) : (
          <MenuIcon sx={{ color: theme.palette.common.gray2, zIndex: 9999 }} />
        )}
      </IconButton>
      <Box sx={{ zIndex: 9999 }}>
        <img src={logo} alt="logo" width="200" height="auto" />
      </Box>
      <Box sx={{ zIndex: 9999 }}>
        <NavIcons />
      </Box>
    </Toolbar>
  );
};

export default DrawerComp;
