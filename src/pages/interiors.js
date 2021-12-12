import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../templates/components/Main/Main';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';

const InteriorsPage = () => {
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

    console.log(data.mdx.body);

    return (
        <MainContent title='Interiors' description={data.mdx.body}>
            <ProjectsGrid projects={data.allMdx.nodes} />
        </MainContent>
    );
};

export default InteriorsPage;
