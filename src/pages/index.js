import React, { useState } from 'react';

import Layout from '../templates/Layout/Layout';
import Logo from '../components/Logo';

const IndexPage = () => {
    const [logoIsActive, setLogoIsActive] = useState(true);
    setTimeout(() => setLogoIsActive(false), 2000);

    return (
        <>
            {logoIsActive ? (
                <Logo animation={true} height={100} />
            ) : (
                <Layout title='Featured' animation={true}></Layout>
            )}
        </>
    );
};

export default IndexPage;
