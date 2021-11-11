import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../../components/Logo';
import useMobile from '../../hooks/useMobile';
import styles from './Layout.module.css';

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
    padding: ${(props) => (props.isMobile ? '0 25px' : '0 10vw')};
    margin: auto;
    overflow: hidden;
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

const Nav = styled.nav`
    width: 100%;
    flex-basis: 0;
    flex-grow: 1;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const NavItem = styled.li`
    margin-left: 60px;
    text-decoration: none;
`;

const Section = styled.section`
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: ${(props) =>
        props.isMobile ? 'flex-start' : 'space-between'};
    height: 100%;
    padding: 20px 0;
`;

const SectionTitle = styled.h2`
    align-self: flex-start;
    position: relative;
    margin: ${(props) => (props.isMobile ? '0 0 14px' : '0 0 0 8%')};
    font-size: 36px;
    font-weight: 800;
    letter-spacing: 1.4px;
    &::before {
        content: '';
        position: absolute;
        top: 24px;
        right: -18px;
        display: block;
        height: 10px;
        width: 10px;
        background-color: black;
        z-index: 1000;
    }
`;

const Content = styled.article`
    height: 100%;
    background-color: white;
`;

const Footer = styled.footer`
    height: 100%;
    text-align: center;
`;

const Layout = ({ title, children, animation }) => {
    const isMobile = useMobile();
    useEffect(() => {
        console.log(isMobile);
    });
    return (
        <Wrapper isMobile={isMobile}>
            <Header
                isMobile={isMobile}
                variants={animation && headerVariants}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.2 }}>
                <Link to='/' state={{ logo: false }}>
                    <Logo height={50} />
                </Link>
                <nav>
                    <NavList>
                        {paths.map((item) => (
                            <NavItem key={item[1]}>
                                <Link
                                    to={`/${item[0]}`}
                                    state={{ animation: false }}>
                                    {item[1]}
                                </Link>
                            </NavItem>
                        ))}
                    </NavList>
                </nav>
            </Header>
            <Main>
                <Section isMobile={isMobile}>
                    <SectionTitle isMobile={isMobile}>{title}</SectionTitle>
                    <Content>{children}</Content>
                </Section>
            </Main>
            <Footer>
                <p>code by</p>
            </Footer>
        </Wrapper>
    );
};

Layout.defaultProps = {
    animation: false,
};

export default Layout;
