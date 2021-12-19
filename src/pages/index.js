import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useWidth from '../hooks/useWidth';
import Main from '../templates/components/Main/Main';
import Logo from '../components/Logo/Logo';
import MobileList from '../components/MobileList/MobileList';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const IndexPage = () => {
    const [logoIsActive, setLogoIsActive] = useState(true);
    setTimeout(() => setLogoIsActive(false), 2000);
    const [isMobile] = useWidth();

    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
                nodes {
                    frontmatter {
                        path
                        type
                        hero_image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    id
                }
            }
            mdx(frontmatter: { title: { eq: "index" } }) {
                body
            }
        }
    `);

    return (
        <>
            {logoIsActive ? (
                <Logo animation={true} height={100} />
            ) : (
                <Main title='Featured' description={data.mdx.body} animation={true} fullWidth>
                    {isMobile ? (
                        <MobileList projects={data.allMdx.nodes} pathType='absolute' />
                    ) : (
                        <ProjectsList projects={data.allMdx.nodes} pathType='absolute' />
                    )}
                </Main>
            )}
        </>
    );
};

export default IndexPage;
