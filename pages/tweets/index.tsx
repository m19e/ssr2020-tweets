import { GetStaticProps } from "next";
import { Divider, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

import { Tweet } from "../../interfaces";
import { TweetData } from "../../utils/tweets";
import Layout from "../../components/Layout";
import TweetList from "../../components/TweetList";

type Props = {
    tweets: Tweet[];
};

const WithStaticProps = ({ tweets }: Props) => (
    <Layout title="SSR2020 Tweets">
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexGrow: 1 }}>
                <h1 style={{ fontSize: "60px", padding: "0 8px", color: "#8dbbff" }}>SSR2020 Tweets</h1>
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
        {/* <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p> */}
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Tweet[] = TweetData;
    return { props: { items } };
};

export default WithStaticProps;
