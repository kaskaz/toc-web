import { AccordionSummary, Divider, IconButton, makeStyles } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import PollCardSummaryArtists from "./PollCardSummaryArtists";
import PollCardSummarySong from "./PollCardSummarySong";
import Poll from "../../../models/poll";
import Configuration from "../../../models/configuration";

const useStyles = makeStyles({
    column: {
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0px 5px'
    },
    divider: {
        width: 2,
        backgroundColor: '#eb6c6c',
    }
});

const PollCardSummary = (props: { config: Configuration, poll: Poll }) => {
    const { config, poll } = props;
    const classes = useStyles();

    const twitterStatus = (): string => config.twitterStatusPart + poll.twitterStatus;

    return (
        <AccordionSummary aria-controls={`poll-content-${poll.id}`} id={`poll-header-${poll.id}`}>
            <div className={classes.column}>
                <PollCardSummarySong poll={poll} />
            </div>
            <Divider orientation='vertical' flexItem className={classes.divider} />
            <div className={classes.column} style={{ flexGrow: 1 }}>
                <PollCardSummaryArtists poll={poll} />
            </div>
            <IconButton href={twitterStatus()} target="_blank" onClick={e => e.stopPropagation()}>
                <Twitter />
            </IconButton>
        </AccordionSummary>
    );
};

export default PollCardSummary;
