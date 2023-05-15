import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Layout title="Home Page">
                <Image src="/img.png" alt="image" width="500" height="300" />
                <br />
                <h1>Halooo</h1>
            </Layout>
        </>
    );
}
