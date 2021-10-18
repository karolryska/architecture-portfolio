import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../../templates/Layout/Layout";

const Project = ({ data }) => {
    return (
        <Layout title="Awards">
        <p>{data.mdx.frontmatter.title}</p>
        </Layout>
    )
};

export const query = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
        frontmatter {
          title
        }
      }
  }
`

export default Project;