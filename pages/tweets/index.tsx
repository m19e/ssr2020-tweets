import { GetStaticProps } from "next";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";

import { Tweet } from "../../interfaces";
import { TweetData } from "../../utils/tweets";
import Layout from "../../components/Layout";

type Props = {
    items: Tweet[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Tweets | Next.js + TypeScript Example">
        <h1>Tweets</h1>
        {items.map((item: Tweet) => (
            <TwitterTweetEmbed tweetId={item.id} options={{ cards: "hidden", width: 300, maxWidth: 800, display: "flex" }} placeholder={"Loading..."} />
        ))}
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
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
