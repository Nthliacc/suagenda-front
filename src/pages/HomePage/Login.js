import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useInputValue } from '../../components/Hooks';
import { baseUrl } from '../../constants';
import axios from 'axios';

export const Login = () => {
  const [open, setOpen] = useState(false);
  const [name, onChangeName] = useInputValue('');

  const history = useHistory();

  const onClickSubmit = async () => {
    axios
    .post(`${baseUrl}/login`, {name})
    .then((response) => {
      localStorage.setItem("token", response.data.acessToken);
      localStorage.setItem("name", name);
      history.push("/dashboard");
    })
    .catch((error) => {
      console.log("Error: ", error.response.data)
    })
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Fazer Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para acessar seus contatos informe seu nome completo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome completo"
            type="name"
            fullWidth
            value={name}
            onChange={onChangeName}
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