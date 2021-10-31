import React from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

import ProjectLink from './ProjectLink';

const Wrapper = styled.ul`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
`;

const ProjectsList = ({ projects }) => (
    <Wrapper>
        {projects.map((project) => {
            const image = getImage(project.frontmatter.hero_image);
            const path = project.frontmatter.path;
            return <ProjectLink key={path} image={image} slug={path} />;
        })}
    </Wrapper>
);

export default ProjectsList;
