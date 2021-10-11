import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.li`
    display: block;
    height: 160px;
    width: 160px;
    background-color: grey;
`;

const ProjectLink = () => (
    <Wrapper>
        <Link to="/">
            {/* image */}
        </Link>
    </Wrapper>
);

export default ProjectLink;