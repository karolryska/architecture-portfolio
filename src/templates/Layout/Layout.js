import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Theme from '../../theme/Theme';
import { GlobalStyle } from '../../theme/GlobalStyle';
import useWidth from '../../hooks/useWidth';
import { Wrapper, Header, Main, Footer } from './Layout.styles';
import Logo from '../../components/Logo/Logo';
import NavMobile from '../components/NavMobile/NavMobile';
import NavDesktop from '../components/NavDesktop/NavDesktop';

const paths = [
    ['projects', 'projects'],
    ['interiors', 'interiors'],
    ['awards', 'awards'],
    ['about', 'about me'],
];

const Layout = ({ children }) => {
    const [isMobile] = useWidth();
    const [logoIsActive, setLogoIsActive] = useState(true);
    setTimeout(() => setLogoIsActive(false), 2000);

    return (
        <Theme>
            <GlobalStyle />
            <Helmet>
                <html lang='en' />
                <title>Tomasz Jakubowski - architecture portfolio</title>
                <meta
                    name='description'
                    content="Tomasz Jakubowski's portfolio, architecture and interior design."
                />
                <meta property='og:title' content='Tomasz Jakubowski - architecture portfolio' />
                <meta
                    property='og:description'
                    content="Tomasz Jakubowski's portfolio, architecture and interior design."
                />
                <meta property='og:url' content='https://tjakubowski.netlify.app/' />
                <meta property='og:image' content='https://tjakubowski.netlify.app/img/cover.png' />
                <meta property='og:type' content='website' />
            </Helmet>
            {logoIsActive ? (
                <Logo animation={true} height={100} />
            ) : (
                <Wrapper>
                    <Header>
                        <Link to='/' state={{ logo: false }}>
                            <Logo height={40} />
                        </Link>
                        {isMobile ? <NavMobile paths={paths} /> : <NavDesktop paths={paths} />}
                    </Header>
                    <Main>{children}</Main>
                    <Footer>
                        <p>private policy | all rights reserved | 2022</p>
                    </Footer>
                </Wrapper>
            )}
        </Theme>
    );
};

export default Layout;
