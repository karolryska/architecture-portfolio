import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: 100;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    list-style: none;
`;

const NavItem = styled.li`
    margin-bottom: 30px;
    font-size: 24px;
    text-decoration: none;
`;

const NavMobile = ({ paths }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    useEffect(() => {
        return () => console.log('unmount');
    }, []);
    return (
        <>
            <button onClick={handleClick}>menu</button>
            <AnimatePresence>
                {isOpen && (
                    <Wrapper
                        initial={{ x: 600 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                        exit={{ x: 600 }}>
                        <NavList>
                            {paths.map((item) => (
                                <NavItem onClick={handleClick} key={item[1]}>
                                    <Link
                                        to={`/${item[0]}`}
                                        state={{ animation: false }}>
                                        {item[1]}
                                    </Link>
                                </NavItem>
                            ))}
                        </NavList>
                    </Wrapper>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavMobile;
