import React, { ReactNode } from "react";
import Head from "next/head";

import { Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div style={{ backgroundColor: "#e4ebf5" }}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {/* <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{" "}
                |{" "}
                <Link href="/about">
                    <a>About</a>
                </Link>{" "}
                |{" "}
                <Link href="/users">
                    <a>Users List</a>
                </Link>{" "}
                | <a href="/api/users">Users API</a>|{" "}
                <Link href="/tweets">
                    <a>Tweets</a>
                </Link>{" "}
            </nav>
        </header> */}
        <div style={{ width: "100%" }}>
            <div style={{ flex: 1 }}>
                <Card inset style={{ margin: "16px", padding: "16px", paddingTop: "8px" }}>
                    {children}
                </Card>
            </div>
        </div>
        {/* <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer> */}
    </div>
);

export default Layout;
