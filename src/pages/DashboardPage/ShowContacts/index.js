import React, { useState } from 'react';
import { List } from './List';
import { PaperBox } from '../PaperBox';
import ListIcon from '@material-ui/icons/List';
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ShowContacts = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <PaperBox text={'Mostrar contatos'} Icon={<ListIcon color='secondary' />} onClick={handleClickOpen} />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
            <List />
            </Dialog> 
        </div>
    );
};