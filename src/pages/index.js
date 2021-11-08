import React, { useState } from 'react';

import Layout from '../templates/Layout/Layout';
import Logo from '../components/Logo';

const IndexPage = ({ location }) => {
    const [logoIsActive, setLogoIsActive] = useState(() =>
        !location.state ? true : false
    );
    setTimeout(() => setLogoIsActive(false), 2000);

    return (
        <>
            {logoIsActive ? (
                <Logo animation='true' height={100} />
            ) : (
                <Layout title='Featured'></Layout>
            )}
        </>
    );
};

export default IndexPage;
