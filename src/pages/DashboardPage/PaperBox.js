import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Box } from './styled';

export const PaperBox = (props) => {
  return (
    <Paper elevation={20}>
      <Box>
        {props.Icon}
        {props.text}
      </Box>
    </Paper>
  );
};