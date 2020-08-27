import React from 'react';
import { Title } from './styled';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const HeaderContainer = () => { 
  const name = localStorage.getItem("name");
  return (
      <Title>
        <h2>Bem vind@, {name}!</h2>
        <div>
          <IconButton aria-label="edit" color="secondary" >
            <EditIcon fontSize="small"/>
          </IconButton>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </div>
      </Title>
  );
};