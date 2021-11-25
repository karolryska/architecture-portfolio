import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    padding: 0 10vw;
    margin: auto;
    overflow: hidden;
    text-align: center;
    @media (min-width: 769px) {
        max-width: 1280px;
        padding: 0;
    }
`;

export const Header = styled(motion.header)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    z-index: 100;
    @media (min-width: 769px) {
        height: 160px;
    }
`;

export const Main = styled.main`
    width: 100%;
    flex-grow: 1;
`;

export const Footer = styled.footer`
    height: 100%;
    text-align: center;
`;
