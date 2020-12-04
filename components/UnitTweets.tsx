import Link from "next/link";

import { Divider, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

import { Tweet, UnitInfo } from "../interfaces";
import Layout from "../components/Layout";
import TweetView from "./Tweet";

type Props = {
    unit: UnitInfo;
    tweets: Tweet[];
};

const UnitTweets = ({ unit, tweets }: Props) => (
    <Layout title={`${unit.fullname} | SSR2020 Tweets`}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
                <Link href="/">
                    <a style={{ textDecoration: "none" }}>
                        <h1 style={{ fontSize: "64px", padding: "0 8px", color: "#8dbbff" }}>SSR2020 Tweets</h1>
                    </a>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <a
                    href={`https://twitter.com/intent/tweet?text=${unit.fullname}+%7C+SSR2020+Tweets&url=https://ssr2020-tweets.vercel.app/${unit.name}`}
                    target="_blank"
                >
                    <IconButton rounded text={false} size={"large"} style={{ margin: "8px" }}>
                        <Icon path={mdiTwitter} size={1.2} color="#1da1f2" />
                    </IconButton>
                </a>
            </div>
        </div>
        <Divider dense elevated style={{ margin: "8px 0" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {tweets.map((t) => (
                <TweetView tweet={t} />
            ))}
        </div>
    </Layout>
);

export default UnitTweets;
