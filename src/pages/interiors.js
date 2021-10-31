import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../templates/Layout/Layout';
import ProjectsList from '../components/ProjectsList';

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
        }
    `);

    return (
        <Layout title='Interiors'>
            <ProjectsList projects={data.allMdx.nodes} />
        </Layout>
    );
};

export default InteriorsPage;
