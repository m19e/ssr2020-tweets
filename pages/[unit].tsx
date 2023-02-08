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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(UnitTweetData).map((key) => ({
    params: { unit: key },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const u = params?.unit;
  const unit = UnitInfoList.find((d) => d.name === u);
  const tweets = UnitTweetData[`${u}`] || [];

  return { props: { unit, tweets } };
};

export default StaticPropsDetail;
