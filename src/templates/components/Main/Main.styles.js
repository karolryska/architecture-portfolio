import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
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

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 769px) {
        width: 40%;
        padding: 100px 180px 0 0;
    }
`;

export const Title = styled(motion.h2)`
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

export const Description = styled(motion.p)`
    display: ${(props) =>
        props.visibleOnMobile === 'true' ? 'inline' : 'none'};

    @media (min-width: 769px) {
        display: inline;
        text-align: left;
    }
`;

export const Content = styled.article`
    min-height: 100%;

    @media (min-width: 769px) {
        width: 60%;
    }
`;

export const contentTransition = {
    duration: 0.2,
    delay: 0.2,
};

export const contentTransitionDelay = {
    duration: 0.2,
    delay: 2.7,
};
