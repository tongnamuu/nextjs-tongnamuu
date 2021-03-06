import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()

    return <nav>
        <img src="/vercel.svg" />
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx global>{`
            nav {
                background-color: red;
            }
            a {
                text-decoration: none;
            }
            .active {
                color: skyblue;
            }
        `}</style>
    </nav >
}
