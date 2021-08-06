import { AccordionActions, IconButton, makeStyles } from "@material-ui/core";
import { HowToVote, YouTube } from "@material-ui/icons";
import Configuration from "../../models/configuration";
import Poll from "../../models/poll";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const PollCardActions = (props: { config: Configuration, poll: Poll }) => {
    const { config, poll } = props;
    const classes = useStyles();

    const voteOriginalUrl = (): string => config.twitterVoteStartPart + poll.twitterStatus + config.twitterVoteOriginalPart;
    const voteCoverUrl = (): string => config.twitterVoteStartPart + poll.twitterStatus + config.twitterVoteCoverPart;

    return (
        <AccordionActions className={classes.root}>
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
    );
};

export default PollCardActions;
