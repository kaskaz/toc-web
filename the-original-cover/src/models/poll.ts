interface Poll {
    id: string;
    number: number;
    songName: string;
    originalArtist: string;
    coverArtist: string;
    artistDetailsOriginal: Array<string>;
    artistDetailsCover: Array<string>;
    votesOriginal: number;
    votesCover: number;
    youtubeOriginalVideoUrl: string;
    youtubeCoverVideoUrl: string;
    artistWebsiteCover: string;
    artistWebsiteOriginal: string;
    twitterStatus: string;
}

export default Poll;
