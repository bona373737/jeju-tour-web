import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta charSet='utf-8'/>
            <title></title>

            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;