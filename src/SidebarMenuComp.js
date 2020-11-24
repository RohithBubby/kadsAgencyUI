import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SidebarMenuItemComp from './SidebarMenuItemComp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
    menuHeader: {
        fontWeight: 'bold',
        fontSize: '14px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        letterSpacing: '1px',
        textAlign: 'left',
        paddingLeft: '18px',
        color: theme.palette.text.secondary,
    }
}));

const SidebarMenuComp = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={1} square>
            {props.menu.header && <div className={classes.menuHeader}>{props.menu.header}</div>}
            {props.menu.items.map(itm => <SidebarMenuItemComp itm={itm} key={itm.text}/>)}
        </Paper>
    );
}

export default SidebarMenuComp;