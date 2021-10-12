import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    FormControl,
    InputAdornment,
    OutlinedInput,
    Button
} from "@material-ui/core";
import { Search } from "@mui/icons-material";

function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navBar}>
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    send FREIGHT
                </Typography>
                <div className={classes.navlinks}>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            id="search"
                            placeholder="Search"
                            className={classes.searchInput}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div>
                        <Button variant="outlined" className={classes.requestBtn}>Request Quote</Button>
                        <Button variant="outlined" className={classes.quoteBtn}>Book Shipment</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

var useStyles = makeStyles((theme) => ({
    requestBtn: {
        color: 'inherit',
        height: '2em',
        textTransform: 'capitalize',
        borderColor: '#bebebe',
        padding: '1.5em 2em'
    },
    quoteBtn: {
        backgroundColor: 'rgb(49 168 55)',
        color: 'inherit',
        height: '2em',
        textTransform: 'capitalize',
        marginLeft: '1em',
        borderColor: '#bebebe',
        padding: '1.5em 2em'
    },
    searchInput: {
        height: '2em',
        backgroundColor: '#396bb8',
        marginLeft: '10em',
        color: 'inherit',
        borderColor: '#bebebe',
        width: '20em'
    },
    navBar: {
        backgroundColor: '#0746a6',
        color: '#fff',
        position: 'initial'
    },
    navlinks: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    logo: {
        cursor: "pointer",
        fontSize: '0.9em',
        width: '8em',
        wordSpacing: '-0.20em'
    }
}));

export default Header;