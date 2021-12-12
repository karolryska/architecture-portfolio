import React, { useEffect, useState, useRef } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper, Project } from './ProjectsList.styles';
import ProjectLink from '../ProjectLink/ProjectLink';

const ProjectsList = ({ projects }) => {
    const [wrapperWidth, setWrapperWidth] = useState();
    const wrapperRef = useRef();
    let counter = 0;

    useEffect(() => {
        wrapperRef.current && setWrapperWidth(wrapperRef.current.offsetWidth);
        window.addEventListener('resize', () => setWrapperWidth(wrapperRef.current.offsetWidth));

        return window.removeEventListener('resize', () =>
            setWrapperWidth(wrapperRef.current.offsetWidth)
        );
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            {projects.map((project) => {
                const image = getImage(project.frontmatter.hero_image);
                const type = project.frontmatter.type;
                const path = project.frontmatter.path;
                const typePath = type === 'project' ? `projects/${path}` : `interiors/${path}`;

                counter === 4 ? (counter = 1) : counter++;
                const counterValue = counter;

                return (
                    <Project key={project.id} number={counterValue} wrapperWidth={wrapperWidth}>
                        <ProjectLink image={image} slug={typePath} title={path} />
                    </Project>
                );
            })}
        </Wrapper>
    );
};

export default ProjectsList;
