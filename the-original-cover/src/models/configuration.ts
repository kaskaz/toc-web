class Configuration {
    private _twitterStatusPart: string;
    private _twitterVoteCoverPart: string;
    private _twitterVoteOriginalPart: string;
    private _twitterVoteStartPart: string;

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
