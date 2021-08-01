import { Typography } from "@material-ui/core";
import Poll from "../models/poll";

const PollCardArtistsHeading = (props: { poll: Poll }) => {
    const { poll } = props;
    return (
        <Typography style={{ fontSize: '20px' }}>
            {`${poll.originalArtist} vs ${poll.coverArtist}`}
        </Typography>
    );
};

export default PollCardArtistsHeading;
