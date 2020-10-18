import React, { useEffect, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import withDialog from './withDialog';

const DialogBox = ({ dialogProps, hideDialog }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!dialogProps);
  }, [dialogProps]);

  if (!dialogProps) {
    return null;
  }

  const { title, text, action } = dialogProps;

  return (
    <Dialog open={open} onClose={hideDialog} aria-labelledby="dialog-box">
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            action();
            hideDialog();
          }}
          color="primary"
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withDialog(DialogBox);
