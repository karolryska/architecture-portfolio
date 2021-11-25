import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence } from 'framer-motion';
import { Wrapper, NavList, NavItem } from './NavMobile.styles';
import Button from '../Button/Button';

const NavMobile = ({ paths }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <Button onClick={handleClick} isActive={isOpen} />
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
                                        style={{ color: 'black' }}
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
