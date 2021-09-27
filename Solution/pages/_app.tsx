import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) =>
{
    return (
        <>
            <Head>
                <title>Fetch!</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    );
}

export default App
