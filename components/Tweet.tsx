import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Card, ProgressCircular } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { Tweet } from "../interfaces";
import OverrideTextColor from "../libs/override";

type Props = {
    tweet: Tweet;
};

const TweetView = ({ tweet }: Props) => {
    useEffect(() => {
        OverrideTextColor(tweet.idol.unit.color);
    }, []);

    return (
        <div key={tweet.id} style={{ padding: "0 8px" }}>
            <TwitterTweetEmbed
                tweetId={tweet.id}
                options={{ width: 300, maxWidth: 800 }}
                placeholder={
                    // <div style={{ width: "250px", height: "500px", margin: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Card
                        style={{
                            backgroundColor: tweet.idol.color,
                            borderRadius: "5%",
                            width: "120px",
                            height: "120px",
                            padding: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ProgressCircular indeterminate size={32} width={4} />
                    </Card>
                    // </div>
                }
            />
        </div>
    );
};

export default TweetView;
