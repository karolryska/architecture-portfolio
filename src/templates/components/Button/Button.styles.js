import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    width: 50px;
    border: none;
    background-color: transparent;
    z-index: 101;
`;

export const Line = styled.span`
    height: 8px;
    width: 100%;
    background-color: black;
`;
