import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import ProjectLink from "./ProjectLink";

const Wrapper = styled.ul`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
`;

const ProjectsList = () => (
    <Wrapper>
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
    </Wrapper>
);

export default ProjectsList;