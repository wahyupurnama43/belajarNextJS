import { useRouter } from "next/router";
import Layout from "@/components/layout";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
}

export default function UserDetail(props: UserDetailProps) {
    const router = useRouter();
    const { id } = router.query;

    const { user } = props;

    return (
        <>
            <Layout title="Detail User">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
                <p>{user?.website}</p>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUser = await res.json();
    const paths = dataUser.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: true,
    };
}

interface getStaticProps {
    params: {
        id: string;
    };
}

export async function getStaticProps(context: getStaticProps) {
    const { id } = context.params;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user = await res.json();
    return {
        props: {
            user,
        },
    };
}
