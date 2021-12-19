import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useWidth from '../hooks/useWidth';
import Main from '../templates/components/Main/Main';
import MobileList from '../components/MobileList/MobileList';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const IndexPage = () => {
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
        <Main title='Featured' description={data.mdx.body} animation={true} fullWidth>
            {isMobile ? (
                <MobileList projects={data.allMdx.nodes} pathType='absolute' />
            ) : (
                <ProjectsList projects={data.allMdx.nodes} pathType='absolute' />
            )}
        </Main>
    );
};

export default IndexPage;
