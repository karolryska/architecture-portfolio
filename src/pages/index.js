import React, { useEffect, useState } from 'react';

import Layout from '../templates/Layout/Layout';
import Logo from '../components/Logo';

const IndexPage = ({ location }) => {
    const [logoIsActive, setLogoIsActive] = useState();
    const logoTimeout = () => {
        setLogoIsActive(true);
        setTimeout(() => setLogoIsActive(false), 3000);
    };

    useEffect(() => {
        location.state ? setLogoIsActive(false) : logoTimeout();
    }, []);
    return <>{logoIsActive ? <Logo /> : <Layout title='Featured'></Layout>}</>;
};

export default IndexPage;
