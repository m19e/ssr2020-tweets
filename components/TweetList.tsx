import * as React from "react";
import TweetView from "./Tweet";
import { Tweet } from "../interfaces";

type Props = {
    tweets: Tweet[];
};

const TweetList = ({ tweets }: Props) => (
    <>
        {tweets.map((t) => (
            <TweetView tweet={t} />
        ))}
    </>
);

export default TweetList;
