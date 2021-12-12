import React from 'react';

import { StyledLink, StyledGatsbyImage } from './ProjectLink.styles';

const ProjectLink = ({ image, title, slug }) => {
    return (
        <StyledLink to={slug}>
            <StyledGatsbyImage image={image} alt={slug} title={title} />
        </StyledLink>
    );
};

export default ProjectLink;
