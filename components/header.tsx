import Link from "next/link";
import styles from "../styles/header.module.css";

export default function header() {
    return (
        <>
            <header className={styles.container}>
                <ul className={styles["d-flex"]}>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/user">Users</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}
