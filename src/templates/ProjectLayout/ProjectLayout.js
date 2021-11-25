import React from 'react';
import { graphql } from 'gatsby';

import MainContent from '../components/Main/Main';
import Gallery from '../../components/Gallery/Gallery';

const ProjectLayout = ({ data }) => {
    return (
        <MainContent
            title={data.mdx.frontmatter.title}
            description={data.mdx.body}
            descritpionOnMobile='true'>
            <Gallery images={data.allFile.nodes}></Gallery>
        </MainContent>
    );
};

export const query = graphql`
    query Title($id: String!, $dir: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
            }
            body
            slug
        }
        allFile(
            filter: {
                extension: { eq: "jpg" }
                relativeDirectory: { eq: $dir }
            }
        ) {
            nodes {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`;

export default ProjectLayout;
