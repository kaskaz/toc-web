import { Button } from "@material-ui/core";
import React from "react";
import Configuration from "../models/configuration";

const PollCardDetailsFooter = (props: { config: Configuration, twitterStatus: string }) => {
    const { config, twitterStatus } = props;
    return (
        <div>
            <Button>vote</Button>
        </div>
    );
};

export default PollCardDetailsFooter;
