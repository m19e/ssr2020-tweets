import { GetStaticProps } from "next";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Card, Divider } from "ui-neumorphism";

import { Tweet } from "../../interfaces";
import { TweetData } from "../../utils/tweets";
import Layout from "../../components/Layout";

type Props = {
    items: Tweet[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Tweets | Next.js + TypeScript Example">
        {/* <h1 style={{ fontSize: "60px", padding: "0 8px" }}>Tweets</h1> */}
        <Divider dense elevated style={{ margin: "8px 0" }} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {items.map((item: Tweet) => (
                <div style={{ padding: "0 8px" }}>
                    <div style={{ width: "250px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TwitterTweetEmbed
                            tweetId={item.id}
                            options={{ width: 300, maxWidth: 800 }}
                            placeholder={<Card style={{ backgroundColor: item.idol.unit.color, borderRadius: "5%", width: "100px", height: "100px" }}></Card>}
                        />
                    </div>
                </div>
            ))}
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
