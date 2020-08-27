import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(15)
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      padding: theme.spacing(2)
    },
  }
}));

export const PaperBox = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={props.onClick}>
      <Paper className={classes.paper} elevation={20}>
        {props.Icon}
        {props.text}
      </Paper>
    </div>
  );
};