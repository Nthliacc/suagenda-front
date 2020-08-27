import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useInputValue } from '../../components/Hooks';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../constants';

export const Signup = () => {
  const [open, setOpen] = useState(false);
  const [name, onChangeName] = useInputValue();
  const [emails, onChangeEmail] = useInputValue();
  const [phones, onChangePhone] = useInputValue();

  const history = useHistory();

  const onClickSubmit = async () => {
    const body = {
      name: name,
      emails: emails,
      phones: phones
    };
    axios
      .post(`${baseUrl}/signup`, body,
      {
          headers: {'Content-Type': 'application/json'}
      })
      .then((response) => {
        localStorage.setItem("token", response.data.acessToken);
        localStorage.setItem("name", name);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log("Error: ", error.response.data)
      });
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
        Criar agenda
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inscrição</DialogTitle>
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
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={emails}
            onChange={onChangeEmail}
          />
          <TextField
            margin="dense"
            label="Telefone"
            type="phone"
            fullWidth
            value={phones}
            onChange={onChangePhone}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClickSubmit} variant="contained" color="primary">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
