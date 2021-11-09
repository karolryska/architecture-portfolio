import React, { useState } from 'react';
import Logo from '../components/Logo';

const IndexPage = ({ location }) => {
    const [logoIsActive, setLogoIsActive] = useState(() =>
        location.state ? false : true
    );
    setTimeout(() => setLogoIsActive(false), 2000);

    return <>{logoIsActive ? <Logo animation='true' height={100} /> : <></>}</>;
};

export default IndexPage;
