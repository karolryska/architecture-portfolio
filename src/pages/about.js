import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../components/MainContent';

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: { title: { eq: "about" } }) {
                body
            }
        }
    `);
    return <MainContent title='About me' description={data.mdx.body} />;
};

export default AboutPage;
