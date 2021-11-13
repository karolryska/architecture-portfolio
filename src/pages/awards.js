import React from 'react';

import MainContent from '../components/MainContent';
import AwardsList from '../components/AwardsList';

const AwardsPage = () => {
    return (
        <MainContent title='Awards'>
            <AwardsList />
        </MainContent>
    );
};

export default AwardsPage;
