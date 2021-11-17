import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import MainContent from '../components/MainContent';
import ProjectsList from '../components/ProjectsList';

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
            <ProjectsList projects={data.allMdx.nodes} />
        </MainContent>
    );
};

export default ProjectsPage;
