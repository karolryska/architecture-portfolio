import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../templates/Layout/Layout";
import ProjectsList from '../components/ProjectsList';

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        title
                        hero_image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout title="Projects">
            <ProjectsList projects={data.allMdx.nodes} />
        </Layout>
    )
};

export default ProjectsPage;