import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import Head from 'next/head'
import Layout from '../components/layout/Layout';
import React from 'react';
import { CssBaseline } from '@mui/material';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PinContextProvider } from '../contexts/PinContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) =>
{
    return (
        <>
            <Head>
                <title>Fetch!</title>
            </Head>
            <CssBaseline />
            <PinContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PinContextProvider>
        </>

    );
}

export default App
