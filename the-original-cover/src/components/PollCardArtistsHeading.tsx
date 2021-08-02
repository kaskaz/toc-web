import { Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import Poll from "../models/poll";

const useTypographyStyles = makeStyles({
    root: {
        fontSize: '20px',
        margin: 5
    }
});

const useChipStyles = makeStyles({
    root: {
        margin: 5,
        width: 50
    }
});

const PollCardArtistsHeading = (props: { poll: Poll }) => {
    const { poll } = props;
    const typographyClasses = useTypographyStyles();
    const chipClasses = useChipStyles();
    return (
        <Grid container direction="row" alignItems="center">
            <Typography className={typographyClasses.root}>
                {poll.originalArtist}
            </Typography>
            <Chip className={chipClasses.root} label={poll.votesOriginal} variant="outlined" size="small" />
            <Typography className={typographyClasses.root}>vs</Typography>
            <Chip className={chipClasses.root} label={poll.votesCover} variant="outlined" size="small" />
            <Typography className={typographyClasses.root}>
                {poll.coverArtist}
            </Typography>
        </Grid>
        
    );
};

export default PollCardArtistsHeading;
