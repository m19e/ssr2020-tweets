import Head from "next/head";

type Props = {
    title: string;
    description?: string;
    keyword?: string;
    image?: string;
    url?: string;
};

export default ({
    title,
    description = "SSR2020 Tweets | List up SSR tweets",
    keyword = "",
    image = "",
    url = "https://ssr2020-tweets.vercel.app/",
}: Props) => (
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={keyword} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={image} />
        <style>{`html { background-color: #e4ebf5 }`}</style>
    </Head>
);
