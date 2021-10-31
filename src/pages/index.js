import React from 'react';

import Layout from '../templates/Layout/Layout';

const IndexPage = ({ location }) => {
    return (
        <Layout title='Featured'>
            {location.state && !location.state.logo ? (
                <p>no animation</p>
            ) : (
                <p>animate logo</p>
            )}
        </Layout>
    );
};

export default IndexPage;
