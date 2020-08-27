import React from 'react';
import { ListPageWrapper } from './styled';
import { AddContact } from './AddContact';
import { ShowContacts } from './ShowContacts';
import { PaperBox } from './PaperBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

export const Section = () => {
  const history = useHistory();

  const handleClickOut = () => {
    history.push('/')
    localStorage.removeItem("token", "name");
  };

  return (
    <ListPageWrapper>
      <AddContact />
      <ShowContacts />
      <PaperBox text={'Sair'} Icon={<ExitToAppIcon color='secondary' />} onClick={handleClickOut} />
    </ListPageWrapper>
  );
};