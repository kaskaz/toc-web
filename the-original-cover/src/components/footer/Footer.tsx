import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import FollowTwitterButton from "./FollowTwitterButton";
import ClipboardJS from "clipboard";
import { useEffect } from "react";

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        color: '#f6eeee',
        backgroundColor: '#363636'
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-around'
    },
    contact: { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    '@media (max-width: 450px)': {
        toolbar: {
            flexDirection: 'column',
            gap: '5px',
            margin: '5px 0px'
        }
    }
});

const Footer = () => {
    const classes = useStyles();

    useEffect(() => {
        new ClipboardJS("#contact-address");
    }, []);

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.contact}>
                    <Typography variant="caption">
                        contact us
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <IconButton 
                            style={{ padding: 0, marginRight: 5 }}
                            id="contact-address"
                            data-clipboard-text="contact@theoriginalcover.com">
                            <FileCopy fontSize="small" htmlColor="#f6eeee"/>
                        </IconButton>
                        <Typography>
                            contact@theoriginalcover.com
                        </Typography>
                    </div>
                </div>
                <FollowTwitterButton />
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
