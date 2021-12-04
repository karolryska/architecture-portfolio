import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Theme from '../../theme/theme';
import { Wrapper } from './ProjectLink.styles';

const ProjectLink = ({ image, title, slug }) => {
    return (
        <Theme>
            <Link
                to={slug}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <Wrapper title={title}>
                    <GatsbyImage
                        image={image}
                        alt={slug}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Wrapper>
            </Link>
        </Theme>
    );
};

export default ProjectLink;
