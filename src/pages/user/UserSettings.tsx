import { useAppSelector, useAppDispatch } from '../../redux/hooks/reduxHooks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { db, auth, deleteUser, doc, deleteDoc } from '../../firebase/config';
import DialogTitle from '@mui/material/DialogTitle';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const UserSettings = () => {
  const values = useAppSelector((state) => state.user.values);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeAccount = async () => {
    if (auth.currentUser) {
      deleteUser(auth.currentUser)
        .then(() => {
          deleteDoc(doc(db, 'users', values.uid));
          console.log('kullanıcı silindi');
          navigate('/');
          setOpen(false);
        })
        .catch((error) => {
          console.log('hele');
        });
    }
  };

  return (
    <Box
      sx={{
        mt: 15,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        minHeight: '90vh'
      }}>
      <h2>
        Merhaba {values.name} {values.surname}{' '}
      </h2>
      <Box sx={{ p: 4, m: 2, width: '80%', textAlign: 'left', backgroundColor: '#fafafa' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <span style={{ fontWeight: 'bold' }}>Adın:</span> {values.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <span style={{ fontWeight: 'bold' }}>Soyadın:</span> {values.surname}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <span style={{ fontWeight: 'bold' }}>Email:</span> {values.email}
        </Typography>
        <Button variant="outlined" color="error" size="small" onClick={handleClickOpen}>
          Hesabı Sil
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            Hesabını silmek istediğinden emin misin {values.name}?
          </DialogTitle>
          <DialogActions>
            <Button variant="outlined" size="small" onClick={removeAccount} color="error">
              Evet
            </Button>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              İptal
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default UserSettings;
