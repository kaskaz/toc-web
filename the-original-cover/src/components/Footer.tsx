import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6">
                    Footer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
