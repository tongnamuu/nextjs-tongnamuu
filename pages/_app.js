import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

// NextJS will come to _app.js and put our component
export default function App({ Component, pageProps }) {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}
