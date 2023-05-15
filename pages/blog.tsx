import Layout from "@/components/layout";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface blogProps {
    dataBlog: Array<any>;
}

export default function Blog(props: blogProps) {
    const { dataBlog } = props;

    console.log(dataBlog);

    return (
        <>
            <Layout title="Blog Page">
                {dataBlog.map((blog) => (
                    <div key={blog.id}>
                        <p>{blog.title}</p>
                        <p>{blog.body}</p>
                        <br />
                    </div>
                ))}
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        },
    };
}
