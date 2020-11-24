import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: '#fbf7ff',
    },
    formControl: {
        marginLeft: theme.spacing(1),
        minWidth: 150,
    },
    commonSelect: {
        backgroundColor: 'white',
        marginTop: '25px',
        borderRadius: '3px',
        padding: '5px'
    },
}));


const DropdownsComp = () => {
    const classes = useStyles();

    const [propertyStatus, setPropertyStatus] = React.useState('');
    const [occupancy, setOccupancyChange] = React.useState('');
    const [landlord, setLandlordChange] = React.useState('');

    const handlePropertyStatusChangeChange = (event) => {
        setPropertyStatus(event.target.value);
    };

    const handleOccupancyChange = (event) => {
        setOccupancyChange(event.target.value);
    };

    const handleLandlordChange = (event) => {
        setLandlordChange(event.target.value);
    };


    return (
        <div style={{ marginTop: '20px', backgroundColor: '#c1a4e0', padding: '20px' }}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="property-native-label-placeholder" style={{ color: 'white' }}>
                    PROPERTY STATUS
            </InputLabel>
                <NativeSelect
                    value={propertyStatus}
                    onChange={handlePropertyStatusChangeChange}
                    className={classes.commonSelect}
                    inputProps={{
                        name: 'property status',
                        id: 'property-native-label-placeholder',
                    }}
                >
                    <option value="available">Available</option>
                    <option value="booked">Booked</option>
                </NativeSelect>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="occupancy-native-label-placeholder" style={{ color: 'white' }}>
                    OCCUPANCY
            </InputLabel>
                <NativeSelect
                    value={occupancy}
                    disabled={true}
                    onChange={handleOccupancyChange}
                    className={classes.commonSelect}
                    inputProps={{
                        name: 'occupancy',
                        id: 'occupancy-native-label-placeholder',
                    }}
                >
                    <option value="all">All Occupancy</option>
                </NativeSelect>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="landlord-native-label-placeholder" style={{ color: 'white' }}>
                    LANDLORD
            </InputLabel>
                <NativeSelect
                    value={landlord}
                    disabled={true}
                    onChange={handleLandlordChange}
                    className={classes.commonSelect}
                    inputProps={{
                        name: 'landlord',
                        id: 'landlord-native-label-placeholder',
                    }}
                >
                    <option value="all">All landlords</option>
                </NativeSelect>
            </FormControl>

            <Button variant="contained" style={{ backgroundColor: 'rebeccapurple', color: 'white', marginLeft: '10px', marginBottom: '3px', verticalAlign: 'bottom' }}>
                Apply
        </Button>
        </div>
    );
}

export default DropdownsComp;