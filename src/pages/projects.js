import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../templates/components/Main/Main';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
                nodes {
                    frontmatter {
                        path
                        hero_image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    id
                }
            }
            mdx(frontmatter: { title: { eq: "projects" } }) {
                body
            }
        }
    `);

    return (
        <MainContent title='Projects' description={data.mdx.body}>
            <ProjectsGrid projects={data.allMdx.nodes} />
        </MainContent>
    );
};

export default ProjectsPage;
