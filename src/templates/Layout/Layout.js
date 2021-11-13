import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import styles from './Layout.module.css';

import useWidth from '../../hooks/useWidth';
import Logo from '../../components/Logo';
import NavMobile from '../components/NavMobile';
import NavDesktop from '../components/NavDesktop';

const paths = [
    ['projects', 'projects'],
    ['interiors', 'interiors'],
    ['awards', 'awards'],
    ['about', 'about me'],
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: ${(props) => (props.isMobile ? '100vw' : '1280px')};
    padding: ${(props) => props.width < 1200 && '0 10vw'};
    margin: auto;
    overflow: hidden;
    text-align: center;
`;

const Header = styled(motion.header)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => (props.isMobile ? '100px' : '160px')};
    width: 100%;
`;

const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const Main = styled.main`
    width: 100%;
    flex-grow: 1;
`;

const Footer = styled.footer`
    height: 100%;
    text-align: center;
`;

const Layout = ({ children }) => {
    const [isMobile, width] = useWidth();

    return (
        <Wrapper isMobile={isMobile} width={width}>
            <Header
                isMobile={isMobile}
                variants={headerVariants}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.2, delay: 2.5 }}>
                <Link to='/' state={{ logo: false }}>
                    <Logo height={50} />
                </Link>
                {isMobile ? (
                    <NavMobile paths={paths} />
                ) : (
                    <NavDesktop paths={paths} />
                )}
            </Header>
            <Main>{children}</Main>
            <Footer>
                <p>code by</p>
            </Footer>
        </Wrapper>
    );
};

export default Layout;
