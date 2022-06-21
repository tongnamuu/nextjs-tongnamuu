import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavBar.module.css"

export default function NavBar() {
    const router = useRouter()

    return <nav className={styles.nav}>
        <Link href="/">
            <a style={{ color: router.pathname === "/" ? "purple": "green" }}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{ color: router.pathname === "/about" ? "purple" : "green" }}> About</a>
        </Link>
    </nav>
}
