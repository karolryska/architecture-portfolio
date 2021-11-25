import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: 100;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    list-style: none;
`;

export const NavItem = styled.li`
    margin-bottom: 30px;
    font-size: 24px;
    text-decoration: none;
`;
