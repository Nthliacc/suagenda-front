import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useInputValue} from '../../../components/Hooks'

export const Add = () => {
  const [open, setOpen] = useState(false);
  const [name, onChangeName] = useInputValue();
  const [email, onChangeEmail] = useInputValue();
  const [phone, onChangePhone] = useInputValue();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onClickSubmit = () => {
    console.log("foi")
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add contato
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar Contato</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome completo"
            type="name"
            fullWidth
            value={name}
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            margin="dense"
            label="Telefone"
            type="phone"
            fullWidth
            value={phone}
            onChange={onChangePhone}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClickSubmit} variant="contained" color="primary">
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};