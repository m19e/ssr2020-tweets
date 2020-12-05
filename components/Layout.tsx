import React, { ReactNode } from "react";
import Head from "../components/Head";

import { Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div>
        <Head title={title} />
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
