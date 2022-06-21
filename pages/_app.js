import NavBar from "../components/NavBar";

// NextJS will come to _app.js and put our component
export default function App({ Component, pageProps }) {
    return <div>
        <NavBar></NavBar>
        <Component {...pageProps} />
        <span>Global</span>

        <style jsx global>{`
            a {
                color:green;
            }
        `}</style>
    </div>;
}
