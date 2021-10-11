import React from 'react';

import Layout from "../templates/Layout/Layout";
import ProjectsList from '../components/ProjectsList';

const ProjectsPage = () => {
    return (
        <Layout title="Projects">
            <ProjectsList />
        </Layout>
    )
};

export default ProjectsPage;