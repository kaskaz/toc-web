import { AccordionSummary, Chip, Divider, IconButton, Typography, makeStyles, Grid, useMediaQuery } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import Poll from "../../models/poll";
import Configuration from "../../models/configuration";

const useStyles = makeStyles({
    divider: {
        width: 2,
        backgroundColor: '#eb6c6c',
    },
    songTitle: {
        fontSize: '24px',
    },
    artistTitle: {
        fontSize: '20px',
    },
    chip: {
        margin: 5,
        width: 50,
        borderColor: '#eb6c6c',
    },
    '@media (max-width: 959px)': {
        divider: {
            width: '95%',
        },
    },
    '@media (max-width: 660px)': {
        songTitle: {
            fontSize: '3.7vw',
        },
        artistTitle: {
            fontSize: '3vw',
        },
    }
});

const PollCardSummary = (props: { config: Configuration, poll: Poll }) => {
    const { config, poll } = props;
    const classes = useStyles();
    const isHorizontal = useMediaQuery('(max-width: 959px)');

    const twitterStatus = (): string => config.twitterStatusPart + poll.twitterStatus;

    return (
        <AccordionSummary aria-controls={`poll-content-${poll.id}`} id={`poll-header-${poll.id}`}>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item container xs={11} alignContent="center" spacing={1}>
                    <Grid item xs={12} md={'auto'}>
                        <Typography className={classes.songTitle}>
                            {`#${poll.number} ${poll.songName}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={'auto'}>
                        <Divider orientation={isHorizontal ? 'horizontal': 'vertical'} className={classes.divider} />
                    </Grid>
                    <Grid item xs={12} md={'auto'}>
                        <Grid container>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography className={classes.artistTitle}>
                                            {poll.originalArtist}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Chip className={classes.chip} label={poll.votesOriginal} variant="outlined" size="small" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Chip className={classes.chip} label={poll.votesCover} variant="outlined" size="small" />
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.artistTitle}>
                                            {poll.coverArtist}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={1} justifyContent="flex-end">
                    <IconButton href={twitterStatus()} target="_blank" onClick={e => e.stopPropagation()}>
                        <Twitter />
                    </IconButton>
                </Grid>
            </Grid>
        </AccordionSummary>
    );
};

export default PollCardSummary;
