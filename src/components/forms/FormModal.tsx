// Components
import Login from './login/Login';
import SignUp from './signUp/SignUp';
// MUI
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import { useState } from 'react';
interface FProps {
  open: boolean;
  closeModal: () => void;
}
const FormModal = ({ open, closeModal }: FProps) => {
  const theme = useTheme();
  const isMobil = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const styleLarge: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column'
  };
  const styleMobil: SxProps = {
    position: 'absolute',
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column'
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}>
      <>
        <Box sx={isMobil ? styleMobil : styleLarge}>
          <IconButton onClick={closeModal} sx={{ alignSelf: 'self-end' }}>
            <CloseIcon />
          </IconButton>
          <TabContext value={tabValue}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="inherit"
                centered>
                <Tab label="GİRİŞ YAP" value="1" />
                <Tab label="üYE OL" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Login />
            </TabPanel>
            <TabPanel value="2">
              <SignUp />
            </TabPanel>
          </TabContext>
        </Box>
      </>
    </Modal>
  );
};

export default FormModal;
