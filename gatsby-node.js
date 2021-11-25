const path = require('path');

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
                    slug
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        result.data.allMdx.nodes.forEach((node) => {
            if (node.frontmatter.type === 'project') {
                createPage({
                    path: `/projects/${node.frontmatter.path}`,
                    component: path.resolve(
                        './src/templates/ProjectLayout/ProjectLayout.js'
                    ),
                    context: {
                        id: node.id,
                        dir: node.slug.substring(0, node.slug.length - 1),
                    },
                });
            } else if (node.frontmatter.type === 'interior') {
                createPage({
                    path: `/interiors/${node.frontmatter.path}`,
                    component: path.resolve(
                        './src/templates/ProjectLayout/ProjectLayout.js'
                    ),
                    context: {
                        id: node.id,
                        dir: node.slug.substring(0, node.slug.length - 1),
                    },
                });
            }
        });
    });
};
