import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper, Project } from './ProjectsList.styles';
import ProjectLink from '../ProjectLink/ProjectLink';

const ProjectsList = ({ projects }) => {
    let counter = 0;

    return (
        <Wrapper>
            {projects.map((project) => {
                const image = getImage(project.frontmatter.hero_image);
                const type = project.frontmatter.type;
                const path = project.frontmatter.path;
                const typePath = type === 'project' ? `projects/${path}` : `interiors/${path}`;

                counter === 4 ? (counter = 1) : counter++;
                const counterValue = counter;

                return (
                    <Project key={project.id} number={counterValue}>
                        <ProjectLink image={image} slug={typePath} title={path} />
                    </Project>
                );
            })}
        </Wrapper>
    );
};

export default ProjectsList;
