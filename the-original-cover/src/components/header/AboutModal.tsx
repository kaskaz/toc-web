import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from "@material-ui/core";
import TocButton from "../button/TocButton";

const TEXT_WHAT_IS = [
    "An online music community",
    "We vote on Twitter between the original and the cover versions of any song"
];

const TEXT_HOW_IT_WORKS = [
    "A song and two versions: the original and the cover",
    "One publication per week",
    "Reply to the publication tweet with the phrase \"I vote original/cover\" for a valid vote",
    "Publications are open to discussion: leave your comments",
    "You can submit songs on this page"
];

const useStyles = makeStyles({
    root: {
        margin: '10px'
    },
    title: {
        textAlign: 'center',
        fontSize: 'larger',
        textTransform: 'uppercase'
    },
    section: {
        textAlign: 'center',
        margin: 0
    },
    subtitle: {
        fontFamily: "Gentium Book Basic",
        color: '#f6eeee'
    },
    paragraph: {
        fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
        marginBottom: 15,
        lineHeight: 1
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

const usePaperStyles = makeStyles({
    root: {
        margin: 32,
        backgroundColor: '#f13b3b'
    }
});

const AboutModal = (props: { show: boolean, onClose: () => void }) => {
    const { show, onClose } = props;
    const classes = useStyles();
    const paperClasses = usePaperStyles();

    const printSubtitle = (title: string): JSX.Element => 
        <Typography variant="h5" className={classes.subtitle} gutterBottom paragraph>{ title }</Typography>;
    
    const printParagraph = (text: string, key: number): JSX.Element => 
        <Typography key={key} className={classes.paragraph}>{ text }</Typography>;

    return (
        <Dialog 
            open={show} 
            onClose={onClose} 
            aria-labelledby="about-dialog-title" 
            transitionDuration={500}
            maxWidth={'lg'}
            PaperProps={{ 
                square: true,
                className: paperClasses.root 
            }}
            className={classes.root}
        >
            <DialogTitle id="about-dialog-title">
                <Typography className={classes.title} >
                    About
                </Typography>
            </DialogTitle>
            <DialogContent className={classes.section}>
                { printSubtitle("What is") }
                { TEXT_WHAT_IS.map(printParagraph) }
            </DialogContent>
            <DialogContent className={classes.section}>
                { printSubtitle("How it works") }
                { TEXT_HOW_IT_WORKS.map(printParagraph) }
            </DialogContent>
            <DialogActions className={classes.actions}>
                <TocButton onClick={onClose}>ok</TocButton>
            </DialogActions>
        </Dialog>
    );
};

export default AboutModal;
