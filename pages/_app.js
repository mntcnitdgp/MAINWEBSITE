import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;
