import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../templates/Layout/Layout';
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
        }
    `);

    return (
        <>
            <ProjectsList projects={data.allMdx.nodes} />
        </>
    );
};

export default ProjectsPage;