import { AccordionActions, AccordionDetails, Grid, IconButton, makeStyles, useMediaQuery } from "@material-ui/core";
import { HowToVote, YouTube } from "@material-ui/icons";
import Configuration from "../../models/configuration";
import Poll from "../../models/poll";

const useStyles = makeStyles({
    header: {
        marginBottom: 5,
        lineHeight: '1rem'
    },
    artist: {
        fontSize: 'large',
    },
    role: {
        fontSize: 'small',
        fontFamily: "Gentium Book Basic",
        color: '#eb6c6c',
    },
    detail: {
        fontSize: 'small',
        textAlign: 'justify',
        margin: '5px 0px',
        '& a:hover': {
            textDecoration: 'underline'
        }
    },
    '@media (max-width: 700px)': {
        detail: {
            fontSize: '2.5vw',
        },
    }
});

const PollCardContent = (props: {config: Configuration, poll: Poll }) => {
    const { config, poll } = props;
    const classes = useStyles();
    const isStacked = useMediaQuery('(max-width: 700px)');

    const template = !isStacked ?
        `
            "original-details cover-details"
            "original-actions cover-actions"
        ` : `
            "original-details"
            "original-actions"
            "cover-details"
            "cover-actions"
        `

    const printHtml = (detail: string): {__html: string} => { return {__html: detail} }
    const voteUrl = (part: string): string => config.twitterVoteStartPart + poll.twitterStatus + part;

    const renderDetails = (details: Array<string>) => {
        return details.map((detail: string, key: number) => {
            return (
                <Grid item key={key} className={classes.detail}>
                    <span dangerouslySetInnerHTML={printHtml(detail)} />
                </Grid>
            );
        });
    };

    return (
        <div style={{ display: 'grid', gridTemplateAreas: template }}>
            <AccordionDetails style={{ paddingBottom: 0, gridArea: 'original-details' }}>
                <Grid container direction="column">
                    <Grid item className={classes.header}>
                        <div className={classes.artist}>{poll.originalArtist}</div>
                        <div className={classes.role}>The original</div>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            { renderDetails(poll.artistDetailsOriginal) }
                        </Grid>
                    </Grid>
                </Grid>
            </AccordionDetails>
            <AccordionDetails style={{ paddingBottom: 0, gridArea: 'cover-details' }}>
                <Grid container direction="column">
                    <Grid item className={classes.header}>
                        <div className={classes.artist}>{poll.coverArtist}</div>
                        <div className={classes.role}>The cover</div>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            { renderDetails(poll.artistDetailsCover) }
                        </Grid>
                    </Grid>
                </Grid>
            </AccordionDetails>
            <AccordionActions style={{ gridArea: 'original-actions' }}>
                <Grid container justifyContent="center" alignItems="flex-end">
                    <Grid item>
                        <IconButton href={voteUrl(config.twitterVoteOriginalPart)} target="_blank">
                            <HowToVote />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href={poll.youtubeOriginalVideoUrl} target="_blank">
                            <YouTube />
                        </IconButton>
                    </Grid>
                </Grid>
            </AccordionActions>
            <AccordionActions style={{ gridArea: 'cover-actions' }}>
                <Grid container justifyContent="center" alignItems="flex-end">
                    <Grid item>
                        <IconButton href={voteUrl(config.twitterVoteCoverPart)} target="_blank">
                            <HowToVote />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href={poll.youtubeCoverVideoUrl} target="_blank">
                            <YouTube />
                        </IconButton>
                    </Grid>
                </Grid>
            </AccordionActions>
        </div>
    );
};

export default PollCardContent;
