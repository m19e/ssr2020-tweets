import { GetStaticProps, GetStaticPaths } from "next";

import { Tweet, UnitInfo } from "../interfaces";
import { UnitTweetData } from "../utils/tweets";
import Layout from "../components/Layout";
import UnitTweets from "../components/UnitTweets";
import { UnitInfoList } from "../utils/units";

type Props = {
    unit: UnitInfo;
    tweets: Tweet[];
    errors?: string;
};

const StaticPropsDetail = ({ unit, tweets, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="Error | SSR2020 Tweets">
                <p>
                    <span style={{ color: "red" }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return <UnitTweets unit={unit} tweets={tweets} />;
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = Object.keys(UnitTweetData).map((key) => ({
        params: { unit: key },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const u = params?.unit;
        const unit = UnitInfoList.find((d) => d.name === u);
        const tweets = UnitTweetData[`${u}`] || [];
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { unit, tweets } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
