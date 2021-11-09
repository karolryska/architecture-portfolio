import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/Gallery';

const projectLayout = ({ data, pageContext }) => {
    console.log(pageContext);
    return (
        <>
            <Gallery images={data.allFile.nodes}></Gallery>
        </>
    );
};

export const query = graphql`
    query Title($id: String!, $dir: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
            }
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

export default projectLayout;
