import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0;
    margin: 10px 0;
    list-style: none;

    @media (min-width: 769px) {
        margin: 0;
    }
`;

export const Award = styled.li`
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 400;

    & p {
        margin: 0;
    }

    @media (min-width: 769px) {
        margin: 0 0 26px;

        &:hover {
            color: ${(props) => props.theme.colors.yellow};
        }
    }
`;
