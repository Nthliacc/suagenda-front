import React from 'react';
import { PaperBox } from './PaperBox';
import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import { Add } from './AddContact';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      padding: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(20)
    },
  },
}));

export const Section = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickAdd = () => {
    history.push("/dashboard");
  };
  const onClickShow = () => {
    history.push("/dashboard");
  };
  const onClickEdit = () => {
    history.push("/dashboard");
  };

  return (
    <div className={classes.root}>
      <PaperBox text={<Add />} Icon={<AddIcon color='secondary'/>} />
      <PaperBox text={'Mostrar contatos'} Icon={<ListIcon color='secondary'/>} />
      <PaperBox text={'Editar meus dados'} Icon={<EditIcon color='secondary'/>} />
    </div>
  );
};