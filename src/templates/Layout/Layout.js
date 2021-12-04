import React from 'react';
import { Link } from 'gatsby';
import Theme from '../../theme/theme';
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

    return (
        <Theme>
            <GlobalStyle />
            <Wrapper>
                <Header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 2.5 }}>
                    <Link to='/' state={{ logo: false }}>
                        <Logo height={40} />
                    </Link>
                    {isMobile ? <NavMobile paths={paths} /> : <NavDesktop paths={paths} />}
                </Header>
                <Main>{children}</Main>
                <Footer>
                    <p>code by</p>
                </Footer>
            </Wrapper>
        </Theme>
    );
};

export default Layout;
