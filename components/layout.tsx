import Header from "../components/header";
import Footer from "../components/footer";
import { ReactNode } from "react";
import Head from "next/head";

interface layoutProps {
    children: ReactNode;
    title: string;
}

export default function layout(props: layoutProps) {
    const { children, title } = props;
    return (
        <div>
            <Head>
                <title>Next Js | {title}</title>
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
