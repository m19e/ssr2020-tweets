import Link from "next/link";
import Layout from "../components/Layout";

import { Divider, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

import { UnitInfoList } from "../utils/units";

const IndexPage = () => (
    <Layout title="SSR2020 Tweets">
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <h1 style={{ fontSize: "64px", padding: "0 8px", color: "#8dbbff" }}>SSR2020 Tweets</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <a href={`https://twitter.com/intent/tweet?text=Check+SSR2020+Tweets&url=https://ssr2020-tweets.vercel.app/`} target="_blank">
                    <IconButton rounded text={false} size={"large"} style={{ margin: "8px" }}>
                        <Icon path={mdiTwitter} size={1.2} color="#1da1f2" />
                    </IconButton>
                </a>
            </div>
        </div>
        <Divider dense elevated style={{ margin: "8px 0" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
            {UnitInfoList.map((info) => (
                <div key={info.name} style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flexGrow: 0 }}>
                        <Link href="/[unit]" as={`/${info.name}`}>
                            <a style={{ textDecoration: "none", flexGrow: 0 }}>
                                <h2
                                    style={{
                                        fontSize: "48px",
                                        margin: "0 8px",
                                        fontWeight: "lighter",
                                        color: info.color,
                                    }}
                                >
                                    {info.fullname}
                                </h2>
                            </a>
                        </Link>
                    </div>
                    <div style={{ flexGrow: 1 }}></div>
                </div>
            ))}
        </div>
        {/* <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p> */}
    </Layout>
);

export default IndexPage;
