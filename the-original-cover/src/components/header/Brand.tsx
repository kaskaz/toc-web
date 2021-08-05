import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {},
    '@media (max-width: 450px)': {
        logo: {
            width: '80%',
        }
    }
});

const Brand = () => {
    const classes = useStyles();
    return (
        <a className={classes.link} href="#">
            <img src="/logo.svg" alt="logo" className={classes.logo} />
        </a>
    );
};

export default Brand;
