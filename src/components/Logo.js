import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: 50vh;
    left: 50vw;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 50px 50px 50px 25px 50px;
    height: 100px;
    transform: translate(-50%, -50%);
    overflow: hidden;
`;

const Vertical = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: black;
`;

const Horizontal = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: black;
`;

const Dot = styled.div`
    grid-column-start: 5;
    grid-row-start: 2;
    background-color: black;
`;

const Logo = () => (
    <Wrapper>
        <Vertical />
        <Horizontal />
        <Dot />
    </Wrapper>
);

export default Logo;
