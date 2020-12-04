import Link from "next/link";

import { Divider, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

import { Tweet, UnitInfo } from "../interfaces";
import Layout from "../components/Layout";
import TweetList from "../components/TweetList";

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
                        <h1 style={{ fontSize: "60px", padding: "0 8px", color: "#8dbbff" }}>SSR2020 Tweets</h1>
                    </a>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <IconButton rounded text={false} size={"large"} style={{ margin: "8px" }}>
                    <Icon path={mdiTwitter} size={1.2} color="#1da1f2" />
                </IconButton>
            </div>
        </div>
        <Divider dense elevated style={{ margin: "8px 0" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <TweetList tweets={tweets} />
        </div>
    </Layout>
);

export default UnitTweets;
