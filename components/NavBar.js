import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()

    return <nav>
        <Link href="/">
            <a style={{ color: router.pathname === "/" ? "purple": "green" }}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{ color: router.pathname === "/about" ? "purple" : "green" }}> About</a>
        </Link>
    </nav>
}
