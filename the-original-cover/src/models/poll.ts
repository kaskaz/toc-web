class Poll {
    private readonly _id: string;
    private readonly _number: number;
    private readonly _songName: string;
    private readonly _originalArtist: string;
    private readonly _coverArtist: string;
    private readonly _artistDetailsOriginal: Array<string>;
    private readonly _artistDetailsCover: Array<string>;
    private readonly _youtubeOriginalVideoUrl: string;
    private readonly _youtubeCoverVideoUrl: string;
    private readonly _twitterStatus: string;

    constructor(
        id: string,
        number: number,
        songName: string,
        originalArtist: string,
        coverArtist: string,
        artistDetailsOriginal: Array<string>,
        artistDetailsCover: Array<string>,
        youtubeCoverVideoUrl: string,
        youtubeOriginalVideoUrl: string,
        twitterStatus: string
    ) {
        this._id = id;
        this._number = number;
        this._songName = songName;
        this._originalArtist = originalArtist;
        this._coverArtist = coverArtist;
        this._artistDetailsOriginal = artistDetailsOriginal;
        this._artistDetailsCover = artistDetailsCover;
        this._youtubeCoverVideoUrl = youtubeCoverVideoUrl;
        this._youtubeOriginalVideoUrl = youtubeOriginalVideoUrl;
        this._twitterStatus = twitterStatus;
    }

    public get id(): string {
        return this._id;
    }

    public get number(): number {
        return this._number;
    }

    public get songName(): string {
        return this._songName;
    }

    public get originalArtist(): string {
        return this._originalArtist;
    }

    public get coverArtist(): string {
        return this._coverArtist;
    }

    public get artistDetailsOriginal(): Array<string> {
        return this._artistDetailsOriginal;
    }

    public get artistDetailsCover(): Array<string> {
        return this._artistDetailsCover;
    }

    public get youtubeCoverVideoUrl(): string {
        return this._youtubeCoverVideoUrl;
    }

    public get youtubeOriginalVideoUrl(): string {
        return this._youtubeOriginalVideoUrl;
    }

    public get twitterStatus(): string {
        return this._twitterStatus;
    }
}

export default Poll;