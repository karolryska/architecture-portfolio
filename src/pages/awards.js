import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../templates/components/Main/Main';
import AwardsList from '../components/AwardsList/AwardsList';

const AwardsPage = () => {
    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: { title: { eq: "awards" } }) {
                body
            }
        }
    `);
    return (
        <MainContent title='Awards' description={data.mdx.body}>
            <AwardsList />
        </MainContent>
    );
};

export default AwardsPage;
