import React from "react";
import Layout from "./Layout/Layout";
import { graphql } from "gatsby";

const projectLayout = ({ data }) => (
    <Layout title={data.mdx.frontmatter.title} />
);

export const query = graphql`
    query Title($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
            }
        }
    }
`;

export default projectLayout;