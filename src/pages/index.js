import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../templates/components/Main/Main';
import Logo from '../components/Logo/Logo';

const IndexPage = () => {
    const [logoIsActive, setLogoIsActive] = useState(true);
    setTimeout(() => setLogoIsActive(false), 2000);

    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: { title: { eq: "index" } }) {
                body
            }
        }
    `);

    return (
        <>
            {logoIsActive && <Logo animation={true} height={100} />}
            <MainContent
                title='Featured'
                description={data.mdx.body}
                animation={true}></MainContent>
        </>
    );
};

export default IndexPage;
