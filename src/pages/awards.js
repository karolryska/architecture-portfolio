import React from 'react';

import Layout from '../templates/Layout/Layout';
import AwardsList from '../components/AwardsList';

const AwardsPage = () => {
    return (
        <Layout title='Awards'>
            <AwardsList />
        </Layout>
    );
};

export default AwardsPage;
