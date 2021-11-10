import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../../components/Logo';

import styles from './Layout.module.css';

const paths = [
    ['projects', 'projects'],
    ['interiors', 'interiors'],
    ['awards', 'awards'],
    ['about', 'about me'],
];

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 160px 1fr 20px;
    min-height: 100vh;
    max-width: 1280px;
    margin: auto;
`;

const Main = styled.main`
    align-self: stretch;
`;

const Header = styled(motion.header)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

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
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    padding: 20px 0;
`;

const SectionTitle = styled.h2`
    position: relative;
    margin-left: 13%;
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
    return (
        <Wrapper>
            <Header
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
                <Section>
                    <SectionTitle>{title}</SectionTitle>
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
