import { useEffect } from "react";
import style from "../styles/404.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        function directAuto() {
            setTimeout(() => {
                router.push("/");
            }, 1000);
        }
        directAuto();
    });

    return (
        <div className={style.title}>
            <h1>Opss halaman anda tidak ditemukan</h1>
            <Link href="/">back to home</Link>
        </div>
    );
}
