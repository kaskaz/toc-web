import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const TocButton = withStyles({
    root: {
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
        root: {
            fontSize: '70%',
        }
    }
})(Button);

export default TocButton;
