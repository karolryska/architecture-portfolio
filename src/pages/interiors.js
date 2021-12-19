import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useWidth from '../hooks/useWidth';
import MainContent from '../templates/components/Main/Main';
import MobileList from '../components/MobileList/MobileList';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';

const InteriorsPage = () => {
    const [isMobile] = useWidth();

    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { frontmatter: { type: { eq: "interior" } } }) {
                nodes {
                    id
                    frontmatter {
                        path
                        hero_image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
            mdx(frontmatter: { title: { eq: "interiors" } }) {
                body
            }
        }
    `);

    return (
        <MainContent title='Interiors' description={data.mdx.body}>
            {isMobile ? (
                <MobileList projects={data.allMdx.nodes} />
            ) : (
                <ProjectsGrid projects={data.allMdx.nodes} />
            )}
        </MainContent>
    );
};

export default InteriorsPage;
