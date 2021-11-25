import React from 'react';
import {
    Background,
    Wrapper,
    Vertical,
    verticalVariants,
    Horizontal,
    horizontalVariants,
    Dot,
    dotVariants,
} from './Logo.styles';

const Logo = ({ animation, height }) => (
    <>
        {animation && <Background />}
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
    </>
);

export default Logo;
