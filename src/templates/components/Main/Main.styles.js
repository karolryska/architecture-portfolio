import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100%;

    @media (min-width: 769px) {
        width: 100%;
        position: relative;
        flex-direction: row;
        justify-content: end;
        padding: 0 50px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 769px) {
        position: absolute;
        top: 0;
        left: 50px;
        width: 25%;
        padding-top: 100px;
    }
`;

export const Title = styled(motion.h2)`
    align-self: flex-start;
    position: relative;
    margin: 0 0 10px;
    font-size: 36px;
    font-weight: 800;
    letter-spacing: 1.4px;

    &::before {
        content: '';
        position: absolute;
        top: 28px;
        right: -8px;
        display: block;
        height: 6px;
        width: 6px;
        background-color: black;
        z-index: 10;
    }
`;

export const Description = styled(motion.p)`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;

    & p {
        margin: 0 0 14px;
    }

    @media (min-width: 769px) {
        display: inline;
        text-align: left;
    }
`;

export const Content = styled(motion.article)`
    min-height: 100%;

    @media (min-width: 769px) {
        width: ${(props) => (props.fullWidth === true ? '100%' : '60%')};
    }
`;

export const contentTransition = {
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    duration: 0.2,
};

export const contentTransitionDelay = {
    duration: 0.2,
    delay: 2.7,
};
