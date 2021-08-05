import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Brand from "./Brand";

const useStyles = makeStyles({
    appbar: {
        height: '80px',
        backgroundColor: '#eb6c6c',
        opacity: '0.9',
        transition: 'opacity .5s',
        '&:hover': {
            opacity: 1
        }
    },
    toolbar: {
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        height: 'fit-content',
        padding: '7px 10px',
        margin: '5px',
        color: '#eb6c6c',
        backgroundColor: '#363636',
        fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
        fontSize: '100%',
        textTransform: 'uppercase',
        textAlign: 'center',
        border: '#363636 1px solid',
        borderRadius: 0,
        lineHeight: '0.5em',
        
        '&:hover': {
            backgroundColor: '#363636',
            borderBottom: '#f6eeee 1px solid'
        }
    },
    '@media (max-width: 450px)': {
        button: {
            fontSize: '70%',
        }
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Brand />
                <div>
                    <Button className={classes.button} disableRipple>about</Button>
                    <Button className={classes.button} disableRipple>submit songs</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
