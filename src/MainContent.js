import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SidebarComp from './SidebarComp';
import Link from '@material-ui/core/Link';
import TableComp from './TableComp';
import DropdownsComp from './DropdownsComp';
import FilterBar from './FilterBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: '#fbf7ff',
    },
}));

const MainContent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={2} sm={2}>
                    <SidebarComp />
                </Grid>

                <Grid item xs={10} sm={10}>
                    <Paper className={classes.paper} elevation={1} square >
                        <div>
                            <Link
                                component="button"
                                variant="body2"
                                underline="always"
                                style={{ color: 'rebeccapurple' }}
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Home
                            </Link>
                            <span style={{ fontSize: 'small', paddingLeft: '5px' }}>{'>'}</span>
                        </div>

                        <h2>Properties</h2>

                        <FilterBar />
                        <DropdownsComp />
                        <TableComp />

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainContent;