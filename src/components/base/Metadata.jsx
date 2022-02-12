import React from 'react'
import Helmet from 'react-helmet'

const Metadata = () => (
    <div>
        <Helmet>
            <title>GyeongSeon Park - Portfolio</title>

            <meta property='og:image' content={'/img/gyeongseon.png'} />
            <meta property='og:locale' content='ko_KR' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='GyeongSeon Park - Portfolio' />
            <meta property='og:description' content="Hi There 👋🏻 My name is GyeongSeon Park and I'm a backend developer in Korea." />
        </Helmet>
    </div>
);

export default Metadata;