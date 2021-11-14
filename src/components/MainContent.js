import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useWidth from '../hooks/useWidth';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 0;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const SectionTitle = styled(motion.h2)`
    align-self: flex-start;
    position: relative;
    margin: 0 0 14px;
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
        z-index: 10;
    }

    @media (min-width: 769px) {
        margin: 0 0 0 8%;
    }
`;

const Content = styled.article`
    min-height: 100%;
`;

const MainContent = ({ children, title }) => {
    const [isMobile] = useWidth();
    return (
        <Section isMobile={isMobile}>
            <SectionTitle isMobile={isMobile}>{title}</SectionTitle>
            <Content>{children}</Content>
        </Section>
    );
};

export default MainContent;
