import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Wrapper, Project } from './MobileList.styles';
import ProjectLink from '../ProjectLink/ProjectLink';

const MobileList = ({ projects, pathType }) => {
    return (
        <Wrapper>
            {projects.map((project) => {
                const image = getImage(project.frontmatter.hero_image);
                const type = project.frontmatter.type;
                const path = project.frontmatter.path;
                const absolutePath = type === 'project' ? `projects/${path}` : `interiors/${path}`;

                return (
                    <Project key={project.id}>
                        <ProjectLink
                            image={image}
                            slug={pathType === 'absolute' ? absolutePath : path}
                            title={path}
                        />
                    </Project>
                );
            })}
        </Wrapper>
    );
};

export default MobileList;
