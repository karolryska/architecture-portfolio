import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Wrapper } from './ProjectLink.styles';

const ProjectLink = ({ image, slug }) => {
    return (
        <Wrapper title={slug}>
            <Link
                to={slug}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <GatsbyImage
                    image={image}
                    alt='image'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Link>
        </Wrapper>
    );
};

export default ProjectLink;
