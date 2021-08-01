import { Typography } from "@material-ui/core";
import Poll from "../models/poll";

const PollCardSongHeading = (props: { poll: Poll }) => {
    const { poll } = props;
    return (
        <Typography style={{ fontSize: '24px' }}>
            {`#${poll.number} ${poll.songName}`}
        </Typography>
    );
};

export default PollCardSongHeading;
