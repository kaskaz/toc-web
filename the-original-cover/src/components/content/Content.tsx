import { useEffect, useState } from "react";
import { CircularProgress, Container, List, ListItem, makeStyles } from "@material-ui/core";
import Poll from "../../models/poll";
import Configuration from "../../models/configuration";
import PollCard from "./PollCard";

import * as firebase from 'firebase/app';
import { collection, doc, getFirestore, getDoc, getDocs, onSnapshot, orderBy, query, where, DocumentData } from "firebase/firestore";

import CONFIG from '../../../firebase';

const app = firebase.initializeApp(CONFIG);
const database = getFirestore(app);

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

const useSpinnerStyles = makeStyles({
    spinner: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f6eeee'
    }
});

const Content = () => {
    const classes = useContainerStyles();
    const listStyles = useListStyles();
    const listItemClasses = useListItemStyles();
    const spinnerClasses = useSpinnerStyles();

    const [ config, setConfig ] = useState<Configuration>(new Configuration('', '', '', ''));
    const [ polls, setPolls ] = useState<Array<Poll>>([]);
    const [ hasPolls, setHasPolls] = useState<Boolean>(false);
    const [ isLoading, setIsLoading ] = useState<Boolean>(true);

    const addPoll = (list: Array<Poll>, id: string, data: DocumentData) => {
        list.push(
            new Poll(
                id,
                data.number,
                data.songName,
                data.artistNameOriginal,
                data.artistNameCover,
                data.artistDetailsOriginal,
                data.artistDetailsCover,
                0,
                0,
                data.youtubeCoverVideo,
                data.youtubeOriginalVideo,
                data.artistWebsiteCover,
                data.artistWebsiteOriginal,
                data.twitterStatus
            )
        );
    };

    useEffect(() => {
        getDoc(doc(database, '/poll-config/config'))
            .then(doc => {
                if(doc.exists()) {
                    let data = doc.data();
                    setConfig(
                        new Configuration(
                            data.twitterStatusPart,
                            data.twitterVoteCoverPart,
                            data.twitterVoteOriginalPart,
                            data.twitterVoteStartPart
                        )
                    );
                }
            });
    }, []);

    useEffect(() => {
        getDocs(
            query(
                collection(database, '/polls'),
                where('isEnabled', '==', true),
                orderBy('number', 'desc')
            )
        ).then(docs => {
            let pollList: Array<Poll> = [];
            docs.forEach(doc => {
                addPoll(pollList, doc.id, doc.data());
            });
            setPolls(pollList);
            setHasPolls(true);
        });
    }, []);

    useEffect(() => {
        if (hasPolls) {
            getDocs(collection(database, '/votes'))
                .then(docs => {
                    docs.docs.forEach((votes, index) => {
                        if (votes.exists()) {
                            let data = votes.data();
                            polls.forEach(poll => {
                                if (poll.twitterStatus === data.id) {
                                    poll.votesCover = data.cover?.length | 0;
                                    poll.votesOriginal = data.original?.length | 0;
                                }
                            });
                        }

                        if (index === (docs.size-1)) {
                            setIsLoading(false);
                        }
                    });
                });
        }
    }, [hasPolls]);

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
                isLoading ?
                    (
                        <div className={spinnerClasses.spinner}>
                            <CircularProgress style={{ color: '#f6eeee' }} />
                        </div>
                    ) : (
                        <List disablePadding className={listStyles.root}>
                            { polls.map(poll => renderListItem(poll, config)) }
                        </List>
                    )
            }
        </Container>
    );
};

export default Content;

