import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBarComponent(props) {
  const {open} = props
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.sendClose(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Registrado con éxito
        </Alert>
        
      </Snackbar>
    </Stack>
  );
}
