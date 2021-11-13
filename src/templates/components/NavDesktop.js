import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const NavItem = styled.li`
    margin-left: 60px;
    text-decoration: none;
`;

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
