import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Card, ProgressCircular } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { Tweet } from "../interfaces";

type Props = {
    tweet: Tweet;
};

const TweetView = ({ tweet }: Props) => (
    <div key={tweet.id} style={{ padding: "0 8px" }}>
        <div style={{ width: "250px", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TwitterTweetEmbed
                tweetId={tweet.id}
                options={{ cards: "hidden", width: 300, maxWidth: 800 }}
                placeholder={
                    <Card
                        style={{
                            backgroundColor: tweet.idol.color,
                            borderRadius: "5%",
                            width: "120px",
                            height: "120px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ProgressCircular indeterminate color={tweet.idol.color} />
                    </Card>
                }
            />
        </div>
    </div>
);

export default TweetView;
