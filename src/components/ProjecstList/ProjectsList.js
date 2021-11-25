import React, { useState, useRef, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper, Placeholder } from './ProjectsList.styles';
import ProjectLink from '../ProjectLink/ProjectLink';

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
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
        </Wrapper>
    );
};

export default ProjectsList;
