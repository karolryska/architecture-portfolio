import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

import ProjectLink from './ProjectLink';

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    @media (min-width: 769px) {
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: ${(props) => (props.wrapperWidth - 32) / 3}px;
        grid-gap: 16px;
    }
`;

const Placehholder = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightgrey;
`;

const ProjectsList = ({ projects }) => {
    const [wrapperWidth, setWrapperWidth] = useState();
    const wrapperRef = useRef();

    useEffect(() => {
        wrapperRef.current && setWrapperWidth(wrapperRef.current.offsetWidth);
    }, []);

    return (
        <Wrapper ref={wrapperRef} wrapperWidth={wrapperWidth}>
            {projects.map((project) => {
                const image = getImage(project.frontmatter.hero_image);
                const path = project.frontmatter.path;
                return (
                    <ProjectLink
                        key={path}
                        image={image}
                        slug={path}
                        wrapperWidth={wrapperWidth}
                    />
                );
            })}
            <Placehholder />
            <Placehholder />
            <Placehholder />
            <Placehholder />
            <Placehholder />
            <Placehholder />
            <Placehholder />
        </Wrapper>
    );
};

export default ProjectsList;
