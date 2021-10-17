import React from "react";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

import ProjectLink from "./ProjectLink";

const Wrapper = styled.ul`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
`;

const ProjectsList = ({ projects }) => (
    <Wrapper>
        {projects.map(project => {
            const image = getImage(project.frontmatter.hero_image); 
            const key = project.frontmatter.hero_image;
            return (
                <ProjectLink key={key} image={image} />
            )
        })};
    </Wrapper>
);

export default ProjectsList;