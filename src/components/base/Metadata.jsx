import React from 'react';
import Helmet from 'react-helmet';

const Metadata = () => (
    <div>
        <Helmet>
            <title>GyeongSun Park - Portfolio</title>

            <meta property='og:image' content={'/img/gyeongseon.png'} />
            <meta property='og:locale' content='ko_KR' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='GyeongSun Park - Portfolio' />
            <meta property='og:description' content="Hi There 👋🏻 My name is GyeongSun Park and I'm a backend software engineer in Korea." />
        </Helmet>
    </div>
);

export default Metadata;