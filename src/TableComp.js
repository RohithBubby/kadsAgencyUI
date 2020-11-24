import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: '#fbf7ff',
    },
    tableContainer: {
        marginTop: 10,
        minHeight: 640
    },
    table: {
        minWidth: 650,
    },
    occupied: {
        borderRadius: 20,
        backgroundColor: '#a68dba'
    },
    pending: {
        borderRadius: 20,
        backgroundColor: '#f7ec72'
    },
    vacant: {
        borderRadius: 20,
        backgroundColor: '#f79294'
    },
    verified: {
        borderRadius: 20,
        backgroundColor: '#8fe07e'
    },
}));


const TableComp = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SL NO.</TableCell>
                        <TableCell align="left">PROPERTIES</TableCell>
                        <TableCell align="left">LANDLOARD NAME</TableCell>
                        <TableCell align="left">STAFF</TableCell>
                        <TableCell align="left">OCCUPANCY</TableCell>
                        <TableCell align="left">INSEPECTION</TableCell>
                        <TableCell align="left">EXPIRED ON</TableCell>
                        <TableCell align="left"><Icon>menu</Icon></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            1
                                        </TableCell>
                        <TableCell align="left">
                            <h3 style={{ margin: '0px' }}>H67903</h3>
                            <span>12, High street, E13 6DB</span>
                        </TableCell>
                        <TableCell align="left">
                            <p>
                                <span>Divya Akhil </span>
                                <Link
                                    component="button"
                                    variant="body2"
                                    underline="always"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                >
                                    (LL84740)
                                                </Link>
                            </p>
                        </TableCell>
                        <TableCell align="left">
                            <Icon>group</Icon>
                        </TableCell>
                        <TableCell align="left">
                            <Button variant="contained" color="primary" className={classes.occupied}>
                                OCCUPIED
                                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button variant="contained" color="primary" className={classes.pending}>
                                PENDING
                                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            11 Feb, 2020
                                        </TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            2
                                        </TableCell>
                        <TableCell align="left">
                            <h3 style={{ margin: '0px' }}>H67903</h3>
                            <span>12, High street, E13 6DB</span>
                        </TableCell>
                        <TableCell align="left">
                            <p>
                                <span>Divya Akhil </span>
                                <Link
                                    component="button"
                                    variant="body2"
                                    underline="always"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                >
                                    (LL84740)
                                                </Link>
                            </p>
                        </TableCell>
                        <TableCell align="left">
                            <Icon>group</Icon>
                        </TableCell>
                        <TableCell align="left">
                            <Button variant="contained" color="primary" className={classes.vacant}>
                                VACANT
                                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button variant="contained" color="primary" className={classes.verified}>
                                VERIFIED
                                            </Button>
                        </TableCell>
                        <TableCell align="left">
                            11 Feb, 2020
                                        </TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComp;