import React, { useState, useRef, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper, Project } from './ProjectsGrid.styles';
import ProjectLink from '../ProjectLink/ProjectLink';
import formatIndex from '../../helpers.js/formatIndex';

const ProjectsGrid = ({ projects }) => {
    const [wrapperWidth, setWrapperWidth] = useState();
    const wrapperRef = useRef();

    const setWidth = () => setWrapperWidth(wrapperRef.current.offsetWidth);

    useEffect(() => {
        wrapperRef.current && setWidth();
        window.addEventListener('resize', setWidth);

        return () => window.removeEventListener('resize', setWidth);
    }, []);

    return (
        <Wrapper ref={wrapperRef} wrapperWidth={wrapperWidth}>
            {projects.map((project, i) => {
                const image = getImage(project.frontmatter.hero_image);
                const path = project.frontmatter.path;
                return (
                    <Project key={project.id}>
                        <ProjectLink
                            image={image}
                            title={formatIndex(i)}
                            slug={path}
                            wrapperWidth={wrapperWidth}
                        />
                    </Project>
                );
            })}
        </Wrapper>
    );
};

export default ProjectsGrid;
