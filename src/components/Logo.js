import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
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
`;

const Vertical = styled(motion.div)`
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: black;
`;

const verticalVariants = {
    initial: { y: -200 },
    animate: { y: 0 },
};

const Horizontal = styled(motion.div)`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: black;
`;

const horizontalVariants = {
    initial: { x: -200 },
    animate: { x: 0 },
};

const Dot = styled(motion.div)`
    grid-column-start: 5;
    grid-row-start: 2;
    background-color: black;
`;

const dotVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
};

const Logo = ({ animation, height }) => (
    <Wrapper animation={animation} height={height}>
        <Vertical
            variants={animation && verticalVariants}
            initial='initial'
            animate='animate'
            transition={{ duration: 0.2 }}
        />
        <Horizontal
            variants={animation && horizontalVariants}
            initial='initial'
            animate='animate'
            transition={{ duration: 0.2, delay: 0.2 }}
        />
        <Dot
            variants={animation && dotVariants}
            initial='initial'
            animate='animate'
            style={{ originX: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
        />
    </Wrapper>
);

export default Logo;
