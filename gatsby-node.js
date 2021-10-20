const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "projects"}}}) {
            nodes {
                id
                frontmatter {
                    title
                }
            }
        }
    }`)
    .then(result => {
        if (result.errors) {
            throw result.errors
        };
        result.data.allMdx.edges.forEach(edge => {
            console.log(edge.node.frontmatter.pat)
        });

        result.data.allMdx.edges.forEach(edge => {
            createPage({
                path: `/projects/${edge.node.frontmatter.pat}`,
                component: path.resolve("./src/templates/projectLayout.js")
            })
        })
  })
};