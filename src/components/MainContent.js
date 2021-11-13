import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useMobile from '../hooks/useMobile';

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

const MainContent = ({ children, title }) => {
    const isMobile = useMobile();
    return (
        <Section isMobile={isMobile}>
            <SectionTitle isMobile={isMobile}>{title}</SectionTitle>
            <Content>{children}</Content>
        </Section>
    );
};

export default MainContent;
