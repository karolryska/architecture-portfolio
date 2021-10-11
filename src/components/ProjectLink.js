import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.li`
    display: block;
    height: 12vw;
    width: 12vw;
    background-color: grey;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 20px;
        width: 20px;
        color: black;
        z-index: 100;
    }
`;

const ProjectLink = () => (
    <Wrapper>
        <Link to="/">
            {/* image */}
        </Link>
    </Wrapper>
);

export default ProjectLink;