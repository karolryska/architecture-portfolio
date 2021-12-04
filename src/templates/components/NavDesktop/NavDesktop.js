import React from 'react';

import { NavList, NavItem, StyledLink } from './NavDesktop.styles';

const NavDesktop = ({ paths }) => {
    return (
        <nav>
            <NavList>
                {paths.map((item) => (
                    <NavItem key={item[1]}>
                        <StyledLink to={`/${item[0]}`} state={{ animation: false }}>
                            {item[1]}
                        </StyledLink>
                    </NavItem>
                ))}
            </NavList>
        </nav>
    );
};

export default NavDesktop;
