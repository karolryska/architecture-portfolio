import React from 'react';
import { Link } from 'gatsby';
import { NavList, NavItem } from './NavDesktop.styles';

const NavDesktop = ({ paths }) => {
    return (
        <nav>
            <NavList>
                {paths.map((item) => (
                    <NavItem key={item[1]}>
                        <Link to={`/${item[0]}`} state={{ animation: false }}>
                            {item[1]}
                        </Link>
                    </NavItem>
                ))}
            </NavList>
        </nav>
    );
};

export default NavDesktop;
