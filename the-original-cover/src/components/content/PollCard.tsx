import { Accordion, makeStyles } from "@material-ui/core";
import PollCardSummary from "./PollCardSummary";
import PollCardContent from "./PollCardContent";
import Poll from "../../models/poll";
import Configuration from "../../models/configuration";

const useStyles = makeStyles({
    root: {
        width: 'inherit',
        backgroundColor: '#f6eeee',
        userSelect: 'none'
    }
});

const PollCard = (props: { config: Configuration, poll: Poll }) => {
    const { config, poll } = props;
    const classes = useStyles();

    return (
        <Accordion square className={classes.root}>
            <PollCardSummary config={config} poll={poll} />
            <PollCardContent config={config} poll={poll} />
        </Accordion>
    )
}

export default PollCard;
