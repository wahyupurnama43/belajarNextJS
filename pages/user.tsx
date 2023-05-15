import Layout from "@/components/layout";

import { useRouter } from "next/router";

interface dataUser {
    dataUser: Array<any>;
}

export default function User(props: dataUser) {
    const router = useRouter();

    const { dataUser } = props;

    return (
        <>
            <Layout title="user Page">
                {dataUser.map((user) => {
                    return (
                        <>
                            <div
                                key={user.id}
                                onClick={() =>
                                    router.push(`/users/${user.id}`)
                                }>
                                <p>{user.name}</p>
                            </div>
                        </>
                    );
                })}
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUser = await res.json();
    return {
        props: {
            dataUser,
        },
    };
}
