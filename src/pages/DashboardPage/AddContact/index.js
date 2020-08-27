import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/PersonAdd';
import {useInputValue} from '../../../components/Hooks';
import { PaperBox } from '../PaperBox';
import { baseUrl } from '../../../constants';

export const AddContact = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [name, onChangeName] = useInputValue();
  const [emails, onChangeEmail] = useInputValue();
  const [phones, onChangePhone] = useInputValue();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickSubmit = async () => {
    const token = localStorage.getItem("token");
    if (token === null) {
        history.push("/");
    }; 
    const body = {
      name: name,
      emails: emails,
      phones: phones
    };
    axios
      .post(`${baseUrl}/add-contact`, body,
      {
        headers: { "Content-Type": "application/json", 'token': `${token}` }
      })
      .then((response) => {
        localStorage.setItem("token", response.data.acessToken);
        console.log(response.data.message)
        setOpen(false);
      })
      .catch((error) => {
        console.log("Error: ", error.response.data)
      });
  };

  return (
    <div>
      <PaperBox text={'Adicionar contato '} Icon={<AddIcon color='secondary'/>} onClick={handleClickOpen}/> 
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
            required={true}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={emails}
            onChange={onChangeEmail}
            required={true}
          />
          <TextField
            margin="dense"
            label="Telefone"
            type="phone"
            fullWidth
            value={phones}
            onChange={onChangePhone}
            required={true}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClickSubmit} variant="contained" color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};