import React from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

import ProjectLink from './ProjectLink';

const Wrapper = styled(motion.ul)`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
`;

const ProjectsList = ({ projects }) => (
    <Wrapper
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}>
        {projects.map((project) => {
            const image = getImage(project.frontmatter.hero_image);
            const path = project.frontmatter.path;
            return <ProjectLink key={path} image={image} slug={path} />;
        })}
    </Wrapper>
);

export default ProjectsList;
