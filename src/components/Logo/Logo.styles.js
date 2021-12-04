import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: 100;
`;

export const Wrapper = styled.div`
    position: ${(props) => props.animation && 'fixed'};
    top: 50vh;
    left: 50vw;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(3, 1fr) 0.5fr 1fr;
    height: ${(props) => props.height}px;
    width: ${(props) => props.height * 2.25}px;
    transform: ${(props) => props.animation && 'translate(-50%, -50%)'};
    overflow: hidden;
    z-index: 101;

    &:hover div {
        background-color: ${(props) => props.theme.colors.yellow};
    }
`;

export const Vertical = styled(motion.div)`
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: black;
    transition: background-color 0.2s;
`;

export const verticalVariants = {
    initial: { y: -200 },
    animate: { y: 0 },
};

export const Horizontal = styled(motion.div)`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: black;
    transition: background-color 0.2s;
`;

export const horizontalVariants = {
    initial: { x: -200 },
    animate: { x: 0 },
};

export const Dot = styled(motion.div)`
    grid-column-start: 5;
    grid-row-start: 2;
    background-color: black;
    transition: background-color 0.2s;
`;

export const dotVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
};
