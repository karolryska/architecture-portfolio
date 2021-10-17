import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";


const Wrapper = styled.li`
    position: relative;
    display: block;
    height: 12vw;
    width: 12vw;
    overflow: hidden;
    
    &:before {
        content: "title";
        opacity: 0;
        position: absolute;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;

    }
    &:hover:before {
            opacity: 1;
    }
`;

const ProjectLink = ({ image }) => (
    <Wrapper>
        <Link 
            to="/"
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <GatsbyImage 
                image={image}
                alt="image" 
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </Link>
    </Wrapper>
);


export default ProjectLink;