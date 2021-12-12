import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Main from '../templates/components/Main/Main';
import Logo from '../components/Logo/Logo';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const IndexPage = () => {
    const [logoIsActive, setLogoIsActive] = useState(true);
    setTimeout(() => setLogoIsActive(false), 2000);

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
                    <ProjectsList projects={data.allMdx.nodes} />
                </Main>
            )}
        </>
    );
};

export default IndexPage;
