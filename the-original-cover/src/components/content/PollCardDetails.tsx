import { AccordionDetails, Grid, makeStyles } from "@material-ui/core";
import Poll from "../../models/poll";

const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 10px'
    },
    contentHeading: {
        fontSize: 'larger',
        fontFamily: "Gentium Book Basic"
    },
    detail: {
        margin: '5px 0px',
        '& a:hover': {
            textDecoration: 'underline'
        }
    }
});

const PollCardDetails = (props: { poll: Poll }) => {
    const { poll } = props;
    const classes = useStyles();

    const printHtml = (detail: string): {__html: string} => { return {__html: detail} }

    const renderDetails = (details: Array<string>) => {
        return details.map((detail: string, key: number) => {
            return (
                <span key={key} className={classes.detail} dangerouslySetInnerHTML={printHtml(detail)} />
            );
        });
    };

    return (
        <AccordionDetails>
            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" style={{ flexGrow: 1 }}>
                <Grid item xs={6} className={classes.content}>
                    <div className={classes.contentHeading}>
                        The original | <span>{poll.originalArtist}</span>
                    </div>
                    { renderDetails(poll.artistDetailsOriginal) }
                </Grid>
                <Grid item xs={6} className={classes.content}>
                    <div className={classes.contentHeading}>
                        The cover | <span>{poll.coverArtist}</span>
                    </div>
                    { renderDetails(poll.artistDetailsCover) }
                </Grid>
            </Grid>
        </AccordionDetails>
    );
};

export default PollCardDetails;
