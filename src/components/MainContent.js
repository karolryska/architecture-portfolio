import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useWidth from '../hooks/useWidth';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 20px 0;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 50px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 769px) {
        width: 40%;
        padding: 100px 180px 0 0;
    }
`;

const Title = styled(motion.h2)`
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
`;

const Description = styled(motion.p)`
    display: ${(props) =>
        props.visibleOnMobile === 'true' ? 'inline' : 'none'};

    @media (min-width: 769px) {
        display: inline;
        text-align: left;
    }
`;

const Content = styled.article`
    min-height: 100%;

    @media (min-width: 769px) {
        width: 60%;
    }
`;

const contentTransition = {
    duration: 0.2,
    delay: 0.2,
};

const contentTransitionDelay = {
    duration: 0.2,
    delay: 2.7,
};

const MainContent = ({ children, title, description, descritpionMobile }) => {
    const [isMobile] = useWidth();
    return (
        <Section isMobile={isMobile}>
            <Header>
                <Title
                    isMobile={isMobile}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={contentTransition}>
                    {title}
                </Title>
                {description && (
                    <Description visibleOnMobile={descritpionMobile}>
                        <MDXRenderer>{description}</MDXRenderer>
                    </Description>
                )}
            </Header>
            <Content>{children}</Content>
        </Section>
    );
};

export default MainContent;
