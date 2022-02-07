module.exports = {
    pathPrefix: `/architecture-portfolio`,
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'architecture-portfolio',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/templates/Layout/Layout.js`),
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`roboto\:200,400,500,700`],
                display: 'swap',
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
};
