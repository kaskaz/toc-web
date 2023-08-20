import { Container, List, ListItem, makeStyles } from "@material-ui/core";
import Poll from "../../models/poll";
import Configuration from "../../models/configuration";
import PollCard from "./PollCard";

const useContainerStyles = makeStyles({
    root: {
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#f13b3b',
        fontFamily: ['"Open Sans"', 'sans-serif'].join(',')
    },
});

const useListStyles = makeStyles({
    root: {
        height: 'inherit',
        padding: '100px 0px'
    }
});

const useListItemStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const Content = (props: { config: Configuration, polls: Poll[] }) => {
    const classes = useContainerStyles();
    const listStyles = useListStyles();
    const listItemClasses = useListItemStyles();

    const renderListItem = (poll: Poll, config: Configuration): JSX.Element => {
        return (
            <ListItem 
                key={poll.number-1}
                className={listItemClasses.root}>
                <PollCard config={config} poll={poll} />
            </ListItem>
        );
    }

    return (
        <Container className={classes.root}>
            {
                <List disablePadding className={listStyles.root}>
                    { props.polls.map(poll => renderListItem(poll, props.config)) }
                </List>
            }
        </Container>
    );
};

export default Content;

