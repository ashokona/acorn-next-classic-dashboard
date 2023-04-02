// import { Helmet } from 'react-helmet';
import Head from 'next/head';
import React from 'react';

const HtmlHead = ({ title = '', description = '', children = null }) => {
    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {children && children}
        </Head>
    );
};
export default HtmlHead;
