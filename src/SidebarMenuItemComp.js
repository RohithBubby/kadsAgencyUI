import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const SidebarMenuItemComp = (props) => {

    return (
        <MenuItem>
            <IconButton aria-label={`${props.itm.text} icon`} color="inherit">
                <Icon color="action">{props.itm.icon}</Icon>
            </IconButton>
            {props.itm.text}
        </MenuItem>
    );
}

export default SidebarMenuItemComp;