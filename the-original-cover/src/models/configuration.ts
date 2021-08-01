class Configuration {
    private readonly _twitterStatusPart: string;
    private readonly _twitterVoteCoverPart: string;
    private readonly _twitterVoteOriginalPart: string;
    private readonly _twitterVoteStartPart: string;

    constructor(
        twitterStatusPart: string,
        twitterVoteCoverPart: string,
        twitterVoteOriginalPart: string,
        twitterVoteStartPart: string
    ) {
        this._twitterStatusPart = twitterStatusPart;
        this._twitterVoteCoverPart = twitterVoteCoverPart;
        this._twitterVoteOriginalPart = twitterVoteOriginalPart;
        this._twitterVoteStartPart = twitterVoteStartPart;
    }

    public get twitterStatusPart(): string {
        return this._twitterStatusPart;
    }

    public get twitterVoteCoverPart(): string {
        return this._twitterVoteCoverPart;
    }

    public get twitterVoteOriginalPart(): string {
        return this._twitterVoteOriginalPart;
    }

    public get twitterVoteStartPart(): string {
        return this._twitterVoteStartPart;
    }
}

export default Configuration;
