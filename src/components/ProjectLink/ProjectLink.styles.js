import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledGatsbyImage = styled(GatsbyImage)`
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;

    @media (min-width: 769px) {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: ${(props) => props.theme.colors.black};
            opacity: 0;
            transition: 0.2s;
        }

        &::after {
            content: '${(props) => props.title}';
            position: absolute;
            z-index: 100;
            top: 50%;
            left: 50%;
            font-size: 40px;
            font-weight: 500;
            letter-spacing: 0.4px;
            color: ${(props) => props.theme.colors.white};
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            opacity: 0;
            transition: 0.2s;
        }

        &:hover:before {
            opacity: 0.7;
        }

        &:hover:after {
            opacity: 1;
        }
    }
`;

export const StyledLink = styled(Link)`
    height: 100%;
    width: 100%;
`;
