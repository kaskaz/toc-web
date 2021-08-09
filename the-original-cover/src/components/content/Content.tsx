import { Container, List, ListItem, makeStyles } from "@material-ui/core";
import Poll from "../../models/poll";
import Configuration from "../../models/configuration";
import PollCard from "./PollCard";

const polls = Array.from(Array(50).keys()).map((v: number, i: number): Poll => {
    return new Poll(
        `poll-id-${i}`,
        i + 1,
        "Black Magic Woman",
        "Fleetwood Mac",
        "Santana",
        [
            'Formed in 1967, London',
            '<a href="http://www.fleetwoodmac.com/" target="_blank">www.fleetwoodmac.com</a>',
            'Released as a single in 1968',
            '<a href="https://www.songfacts.com/facts/santana/black-magic-woman" target="_blank">The royalties generated by Santana\'s cover of this song helped sustain the song\'s writer, Peter Green, after he left Fleetwood Mac. Green gave most of his money away when he left the band, and would have found himself destitute later in the \'70s if he didn\'t get checks from his old hits.</a>'
        ],
        [
            'Formed in 1966, San Francisco',
            '<a href="http://www.santana.com/" target="_blank">www.santana.com</a>',
            'From the album Abraxas released in 1970',
            '<a href="https://www.songfacts.com/facts/santana/black-magic-woman" target="_blank">This was a hit for Santana, but few people know that this song is actually a cover of a 1968 Fleetwood Mac song that hit #37 in the UK. Peter Green, who was a founding member of Fleetwood Mac, wrote the lyrics.</a>'
        ],
        999,
        20,
        "https://www.youtube.com/watch?v=axbtig7w7a8",
        "https://www.youtube.com/watch?v=hRu7Pt42x6Y",
        "https://www.santana.com",
        "https://www.fleetwoodmac.com",
        "1285008608770633730"
    );
});

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

const Content = () => {
    const classes = useContainerStyles();
    const listStyles = useListStyles();
    const listItemClasses = useListItemStyles();

    const config = new Configuration(
        "https://twitter.com/originalvscover/status/",
        "&text=I+vote+cover!",
        "&text=I+vote+original!",
        "https://twitter.com/intent/tweet?in_reply_to="
    );

    const renderListItem = (poll: Poll): JSX.Element => {
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
            <List disablePadding className={listStyles.root}>
                { polls.map(renderListItem) }
            </List>
        </Container>
    );
};

export default Content;

