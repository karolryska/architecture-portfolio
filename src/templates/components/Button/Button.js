import React from 'react';
import { Wrapper, Line } from './Button.styles';

const Button = (props) => {
    return (
        <Wrapper {...props}>
            <Line />
            <Line />
            <Line />
        </Wrapper>
    );
};

export default Button;
