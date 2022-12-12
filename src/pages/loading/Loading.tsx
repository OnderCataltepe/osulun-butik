import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
const Loading = (): JSX.Element => {
  return (
    <Modal open={true} disableEnforceFocus>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          outline: 'none'
        }}>
        <CircularProgress size={60} color="secondary" />;
      </div>
    </Modal>
  );
};
export default Loading;
