import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 10vw;
    margin: auto;
    overflow: hidden;
    text-align: center;

    @media (min-width: 769px) {
        padding: 0;
        margin: 0 10vw;
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
        margin: auto;
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
    margin: 5px 0 25px;

    @media (min-width: 769px) {
        margin: 0 0 30px;
    }
`;

export const Footer = styled.footer`
    margin-bottom: 10px;
    height: 100%;
    font-size: 12px;
    text-align: center;
`;
