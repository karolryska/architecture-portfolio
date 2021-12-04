import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

export const NavItem = styled.li`
    margin-left: 60px;
    text-decoration: none;
`;

export const StyledLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    transition: 0.2s;

    &:hover {
        color: ${(props) => props.theme.colors.yellow};
    }
`;
