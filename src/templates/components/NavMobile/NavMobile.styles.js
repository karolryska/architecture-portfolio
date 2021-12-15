import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: -1;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 120px 0 0 10vw;
    list-style: none;
`;

export const NavItem = styled.li`
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 800;
    text-align: left;

    & a {
        color: ${(props) => props.theme.colors.black};
        text-decoration: none;
    }
`;
