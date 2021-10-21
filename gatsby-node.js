const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    query {
        allMdx {
            nodes {
                id
                frontmatter {
                    title
                    path
                    type
                }
            }
        }
    }`)
    .then(result => {
        if (result.errors) {
            throw result.errors
        };
        result.data.allMdx.nodes.forEach(node => {
            if (node.frontmatter.type === "project") {
                createPage({
                    path: `/projects/${node.frontmatter.path}`,
                    component: path.resolve("./src/templates/projectLayout.js"),
                    context: {
                        id: node.id
                    }
                });
            } else if (node.frontmatter.type === "interior") {
                createPage({
                    path: `/interiors/${node.frontmatter.path}`,
                    component: path.resolve("./src/templates/projectLayout.js"),
                    context: {
                        id: node.id
                    }
                });
            };
        });
  });
};