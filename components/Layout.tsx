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
            <style>{`html { background-color: #e4ebf5 }`}</style>
        </Head>
        <div style={{ width: "100%" }}>
            <div style={{ flex: 1 }}>
                <Card inset style={{ margin: "32px", padding: "16px", paddingTop: "8px" }}>
                    {children}
                </Card>
            </div>
        </div>
    </div>
);

export default Layout;
