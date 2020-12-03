import { GetStaticProps } from "next";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Card, Divider, ProgressCircular } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { Tweet } from "../../interfaces";
import { TweetData } from "../../utils/tweets";
import Layout from "../../components/Layout";
import TweetList from "../../components/TweetList";

type Props = {
    items: Tweet[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Tweets | Next.js + TypeScript Example">
        {/* <h1 style={{ fontSize: "60px", padding: "0 8px" }}>Tweets</h1> */}
        <Divider dense elevated style={{ marginTop: "8px" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <TweetList tweets={items} />
        </div>
        {/* <ProgressCircular indeterminate color="#7967c3" /> */}
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
