import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Divider, Grid, IconButton, makeStyles } from "@material-ui/core";
import { HowToVote, YouTube, Twitter } from "@material-ui/icons";
import PollCardArtistsHeading from "./PollCardArtistsHeading";
import PollCardSongHeading from "./PollCardSongHeading";
import Poll from "../models/poll";
import Configuration from "../models/configuration";
import React from "react";

const config = new Configuration(
    "https://twitter.com/originalvscover/status/",
    "&text=I+vote+cover!",
    "&text=I+vote+original!",
    "https://twitter.com/intent/tweet?in_reply_to="
);

const useAccordionStyles = makeStyles({
    root: {
        width: 'inherit',
        backgroundColor: '#1234'
    },
    column: {
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0px 5px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 10px'
    },
    contentHeading: {
        fontSize: 'larger'
    },
    detail: {
        margin: '5px 0px'
    },
    pollVideoWrapper: {
        position: 'relative',
        width: '90%',
        margin: 'auto',
        paddingBottom: '56.25%'
    },
    pollVideo: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '0'
    }
});

const useAccordionActionsStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const PollCard = (props: { poll: Poll }) => {
    const { poll } = props;
    const classes = useAccordionStyles();
    const accordionActionsClasses = useAccordionActionsStyles();

    const printHtml = (detail: string): {__html: string} => { return {__html: detail} }

    const renderDetails = (details: Array<string>) => {
        return details.map((detail: string, key: number) => {
            return (
                <span key={key} className={classes.detail} dangerouslySetInnerHTML={printHtml(detail)} />
            );
        });
    };
    
    const voteOriginalUrl = (): string => config.twitterVoteStartPart + poll.twitterStatus + config.twitterVoteOriginalPart;
    const voteCoverUrl = (): string => config.twitterVoteStartPart + poll.twitterStatus + config.twitterVoteCoverPart;

    return (
        <Accordion
            square
            className={`${classes.root}`}>
            <AccordionSummary aria-controls={`poll-content-${poll.id}`} id={`poll-header-${poll.id}`}>
                <div className={classes.column}>
                    <PollCardSongHeading poll={poll} />
                </div>
                <Divider orientation='vertical' flexItem style={{ width: 2 }} />
                <div className={classes.column} style={{ flexGrow: 1 }}>
                    <PollCardArtistsHeading poll={poll} />
                </div>
                <IconButton>
                    <Twitter />
                </IconButton>
            </AccordionSummary>
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
            <AccordionActions className={accordionActionsClasses.root}>
                <div>
                    <IconButton href={voteOriginalUrl()} target="_blank">
                        <HowToVote />
                    </IconButton>
                    <IconButton href={poll.youtubeOriginalVideoUrl} target="_blank">
                        <YouTube />
                    </IconButton>
                </div>
                <div>
                    <IconButton href={voteCoverUrl()} target="_blank">
                        <HowToVote />
                    </IconButton>
                    <IconButton href={poll.youtubeCoverVideoUrl} target="_blank">
                        <YouTube />
                    </IconButton>
                </div>
            </AccordionActions>
        </Accordion>
    )
}

export default PollCard;
