import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    width: 40px;
    padding: 0;
    border: none;
    background-color: transparent;
    z-index: 101;
`;

export const Line = styled.span`
    height: 7px;
    width: 100%;
    background-color: black;
`;
